<?php
include "../includes/config.php";

function handleError($message)
{
    http_response_code(500);
    echo json_encode(array('success' => false, 'message' => $message));
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    $search = isset($_POST['search']) ? trim($_POST['search']) : "";
    $disabilityPercentage = isset($_POST['disabilityPercentage']) ? trim($_POST['disabilityPercentage']) : "";
    $placeOfWork = isset($_POST['location']) ? trim($_POST['location']) : "";
    $jobType = isset($_POST['jobType']) ? trim($_POST['jobType']) : "";
    $searchLike = "%$search%";

    $query = "SELECT * FROM `job` WHERE `jobDesignation` LIKE ? OR `jobType` = ? OR `placeOfWork` = ? OR `disabilityInfoPercentage` = ?";
    $stmt = $conn->prepare($query);

    $stmt->bind_param("ssss", $searchLike, $jobType, $placeOfWork, $disabilityPercentage);

    try {
        $stmt->execute();

        $result = $stmt->get_result();
        $rows = $result->fetch_all(MYSQLI_ASSOC);
        
        $response = array(
            'success' => true,
            'message' => 'Jobs found!',
            'jobs' => $rows,
        );

        header('Content-Type: application/json');
        echo json_encode($response);
    } catch (Exception $e) {
        handleError("Database error: " . $e->getMessage());
    } finally {
        $stmt->close();
        $conn->close();
    }
}
