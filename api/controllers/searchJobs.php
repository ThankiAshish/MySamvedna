<?php
include '../includes/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $search = $_POST['search'];
    $disabilityPercentage = $_POST['disabilityPercentage'];
    $placeOfWork = $_POST['location'];
    $jobType = $_POST['jobType'];

    $query = "SELECT * FROM `job` WHERE `jobDesignaion` LIKE '%$search%' OR `jobType` = ? OR `placeOfWork` = ? OR `disabilityInfoPercentage` = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sss", $disabilityPercentage, $placeOfWork, $jobType);
    $stmt->execute();

    while ($datarow = mysqli_fetch_array($data)) {
        $rows[] = $datarow;
    }

    header('Content-Type: application/json');
    $json = json_encode($rows);
    echo $json;
}
