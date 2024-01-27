<?php
include '../includes/config.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_SESSION['job_seekers_id'])) {
    $response = array(
      'success' => false,
      'message' => 'Already logged in!',
    );
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
  } else {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $stmt = $conn->prepare("SELECT * FROM job_seeker WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
      $recruiter = $result->fetch_assoc();
      if ($password === $recruiter['password']) {

        $_SESSION['job_seeker_id'] = $recruiter['job_seeker_id'];

        $response = array(
          'success' => true,
          'message' => 'Login Successful!',
          "job_seeker_id" => $recruiter['job_seeker_id'],
        );
      } else {
        $response = array(
          'success' => false,
          'message' => 'Incorrect password!',
        );
      }
    } else {
      $response = array(
        'success' => false,
        'message' => 'Email does not exist!',
      );
    }

    header('Content-Type: application/json');
    echo json_encode($response);

    $stmt->close();
    $conn->close();
  }
}
