<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set header to JSON
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Include database configuration
require_once '../config/database.php';

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(json_encode(['success' => true]));
}

// Validate request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['success' => false, 'error' => 'Method not allowed']));
}

// Get POST data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validate input
$errors = [];

if (empty($name)) {
    $errors[] = 'الاسم مطلوب';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'البريد الإلكتروني غير صحيح';
}

if (empty($subject)) {
    $errors[] = 'الموضوع مطلوب';
}

if (empty($message)) {
    $errors[] = 'الرسالة مطلوبة';
}

// If there are validation errors
if (!empty($errors)) {
    http_response_code(400);
    exit(json_encode([
        'success' => false,
        'error' => implode(', ', $errors)
    ]));
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Insert into database
$sql = "INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)";
$result = executeQuery($conn, $sql, [$name, $email, $phone, $subject, $message], 'sssss');

if ($result['success']) {
    // Send email notification (optional)
    sendEmailNotification($name, $email, $subject, $message);
    
    http_response_code(200);
    exit(json_encode([
        'success' => true,
        'message' => 'تم إرسال رسالتك بنجاح'
    ]));
} else {
    http_response_code(500);
    exit(json_encode([
        'success' => false,
        'error' => 'حدث خطأ أثناء إرسال الرسالة'
    ]));
}

// Function to send email notification
function sendEmailNotification($name, $email, $subject, $message) {
    // Email headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . $email . "\r\n";
    
    // Email body
    $body = "<html><body style='font-family: Arial, sans-serif;'>";
    $body .= "<h2>رسالة جديدة من نموذج الاتصال</h2>";
    $body .= "<p><strong>الاسم:</strong> " . $name . "</p>";
    $body .= "<p><strong>البريد الإلكتروني:</strong> " . $email . "</p>";
    $body .= "<p><strong>الموضوع:</strong> " . $subject . "</p>";
    $body .= "<p><strong>الرسالة:</strong></p>";
    $body .= "<p>" . nl2br($message) . "</p>";
    $body .= "</body></html>";
    
    // Send email (commented by default - configure SMTP first)
    // mail('your-email@example.com', $subject, $body, $headers);
}

$conn->close();
?>
