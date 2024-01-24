<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, multipart/form-data");
header("Access-Control-Allow-Credentials: true");

session_start();

function checkSession()
{
    if (isset($_SESSION['recruiter_id'])) {
        echo json_encode(array('isLoggedIn' => true));
    } else {
        echo json_encode(array('isLoggedIn' => false));
    }
}

checkSession();
