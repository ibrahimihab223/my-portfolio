<?php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'portfolio_db');

// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set charset
$conn->set_charset("utf8mb4");

// Function to prepare and execute queries
function executeQuery($conn, $sql, $params = [], $types = '') {
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        return ['success' => false, 'error' => $conn->error];
    }
    
    if (!empty($params)) {
        $stmt->bind_param($types, ...$params);
    }
    
    if ($stmt->execute()) {
        return ['success' => true, 'stmt' => $stmt];
    } else {
        return ['success' => false, 'error' => $stmt->error];
    }
}
?>
