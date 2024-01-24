<?php
include '../includes/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $stmt = $conn->prepare("SELECT * FROM recruiters WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();

  $result = $stmt->get_result();
  
  if ($result->num_rows > 0) {
      $recruiter = $result->fetch_assoc();
      if ($password === $recruiter['password']) {
        $response = array(
            'success' => true,
            'message' => 'Login Successful!',
        );
    } else {
      $message = 'Incorrect password!';
      $response = array(
        'success' => false,
        'message' => $message,
      );
    }
  } else {
    $message = 'Email does not exist!';
    $response = array(
      'success' => false,
      'message' => $message,
    );
  }

  header('Content-Type: application/json');
  $jsonResponse = json_encode($response);
  echo $jsonResponse;

  $stmt->close();
  $conn->close();
}