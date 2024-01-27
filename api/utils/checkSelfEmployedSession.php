<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

session_start();

function checkSession()
{
    if (isset($_SESSION['self_employed_id'])) {
        echo json_encode(array('is_logged_in' => true, 'self_employed_id' => $_SESSION['self_employed_id']));
    } else {
        echo json_encode(array('is_logged_in' => false, 'self_employed_id' => null));
    }
}

checkSession();
