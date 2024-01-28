<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

session_start();

function checkSession($sessionKey)
{
    if (isset($_SESSION[$sessionKey])) {
        return array('is_logged_in' => true, $sessionKey => $_SESSION[$sessionKey]);
    } else {
        return array('is_logged_in' => false, $sessionKey => null);
    }
}

$response = array_merge(
    checkSession('self_employed_id'),
    checkSession('job_seekers_id'),
    checkSession('recruiters_id')
);

echo json_encode($response);
