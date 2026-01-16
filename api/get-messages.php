<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json; charset=utf-8');

// Include database configuration
require_once '../config/database.php';

// Check if user is authenticated (add your auth logic here)
// For now, we'll allow access with a simple API key

if (!isset($_GET['api_key']) || $_GET['api_key'] !== 'your_secret_key') {
    http_response_code(401);
    exit(json_encode(['success' => false, 'error' => 'Unauthorized']));
}

// Get messages
$sql = "SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 50";
$result = $conn->query($sql);

$messages = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }
}

http_response_code(200);
exit(json_encode([
    'success' => true,
    'count' => count($messages),
    'messages' => $messages
]));

$conn->close();
?>
