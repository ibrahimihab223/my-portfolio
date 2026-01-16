<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json; charset=utf-8');

// Include database configuration
require_once '../config/database.php';

// Check if user is authenticated
if (!isset($_GET['api_key']) || $_GET['api_key'] !== 'your_secret_key') {
    http_response_code(401);
    exit(json_encode(['success' => false, 'error' => 'Unauthorized']));
}

// Validate request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['success' => false, 'error' => 'Method not allowed']));
}

// Get message ID
$id = intval($_POST['id'] ?? 0);

if ($id <= 0) {
    http_response_code(400);
    exit(json_encode(['success' => false, 'error' => 'Invalid message ID']));
}

// Delete message
$sql = "DELETE FROM contact_messages WHERE id = ?";
$result = executeQuery($conn, $sql, [$id], 'i');

if ($result['success']) {
    http_response_code(200);
    exit(json_encode(['success' => true, 'message' => 'تم حذف الرسالة']));
} else {
    http_response_code(500);
    exit(json_encode(['success' => false, 'error' => 'حدث خطأ أثناء حذف الرسالة']));
}

$conn->close();
?>
