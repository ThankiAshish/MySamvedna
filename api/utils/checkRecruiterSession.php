<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

session_start();

function checkSession()
{
    if (isset($_SESSION['recruiters_id'])) {
        echo json_encode(array('isLoggedIn' => true, 'recruiters_id' => $_SESSION['recruiters_id']));
    } else {
        echo json_encode(array('isLoggedIn' => false, 'recruiters_id' => null));
    }
}

checkSession();
