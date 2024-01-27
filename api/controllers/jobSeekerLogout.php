<?php
include '../includes/config.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_SESSION['job_seekers_id'])) {
        session_destroy();
        $response = array(
            'success' => true,
            'message' => 'Logout Successful!',
        );
    } else {
        $response = array(
            'success' => false,
            'message' => 'Not logged in!',
        );
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
