<?php
include '../includes/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $stmt = $conn->prepare("SELECT * FROM recruiters where recruiters_id = ?");
    $stmt->bind_param("s", $_POST['recruiter_id']);
    $stmt->execute();
    
    $result = $stmt->get_result();
    
    if ($result->num_rows < 1) {
        $message = 'Recruiter does not exist';
        $response = array(
            'success' => false,
            'message' => $message,
        );
        
        header('Content-Type: application/json');
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        exit();
    }
    
    $query = "INSERT INTO job (
        `recruiters_id`, `companyName`, `website`, `natureOfBusiness`, 
        `address`, `fax`, `areaCode`, `landline`, `mobile`, 
        `email`, `employerName`, `companyDescription`, `jobDesignation`, `jobType`, 
        `dutyDescription`, `essentialQualificationEssential`, `essentialQualificationDesirable`, `ageLimit`, `womenEligible`, 
        `workingHoursFrom`, `workingHoursTo`, `vacanciesRegular`, `vacanciesTemporary`, `payAndAllowances`, 
        `placeOfWork`, `resumesToBeSent`, `resumeEmail`, `interviewDetailsDate`, `interviewDetailsTime`, 
        `interviewDetailsAptitudeTest`, `interviewDetailsTechnicalTest`, `interviewDetailsGroupDiscussion`, `interviewDetailsPersonalInterview`, `interviewDetailsTopics`, 
        `interviewDetailsContactPerson`, `disabilityInfoType`, `disabilityInfoPercentage`, `disabilityInfoAidOrAppliance`, `ownVehiclePreferred`, 
        `conveyanceProvided`, `conveyanceType`, `otherInformation`) 
        VALUES (
            ?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?)";

    print_r($stmt = $conn->prepare($query));
    die();

    $stmt->bind_param(
        "ssss
         sssss
         sssss
         sssss
         sssss
         sssss
         sssss
         sssss
         sss",
        $_POST['recruiters_id'],
        $_POST['companyName'],
        $_POST['website'],
        $_POST['natureOfBusiness'],
        $_POST['address'],
        $_POST['fax'],
        $_POST['areaCode'],
        $_POST['landline'],
        $_POST['mobile'],
        $_POST['email'],
        $_POST['employerName'],
        $_POST['companyDescription'],
        $_POST['jobDesignation'],
        $_POST['jobType'],
        $_POST['dutyDescription'],
        $_POST['essentialQualificationEssential'],
        $_POST['essentialQualificationDesirable'],
        $_POST['ageLimit'],
        $_POST['womenEligible'],
        $_POST['workingHoursFrom'],
        $_POST['workingHoursTo'],
        $_POST['vacanciesRegular'],
        $_POST['vacanciesTemporary'],
        $_POST['payAndAllowances'],
        $_POST['placeOfWork'],
        $_POST['resumesToBeSent'],
        $_POST['resumeEmail'],
        $_POST['interviewDetailsDate'],
        $_POST['interviewDetailsTime'],
        $_POST['interviewDetailsAptitudeTest'],
        $_POST['interviewDetailsTechnicalTest'],
        $_POST['interviewDetailsGroupDiscussion'],
        $_POST['interviewDetailsPersonalInterview'],
        $_POST['interviewDetailsTopics'],
        $_POST['interviewDetailsContactPerson'],
        $_POST['disabilityInfoType'],
        $_POST['disabilityInfoPercentage'],
        $_POST['disabilityInfoAidOrAppliance'],
        $_POST['ownVehiclePreferred'],
        $_POST['conveyanceProvided'],
        $_POST['conveyanceType'],
        $_POST['otherInformation']
    );

    $stmt->execute();

    $message = 'Job posted successfully';
    $response = array(
        'success' => true,
        'message' => $message,
    );

    header('Content-Type: application/json');
    $jsonResponse = json_encode($response);
    echo $jsonResponse;
} else {
    $message = 'Invalid request method';
    $response = array(
        'success' => false,
        'message' => $message,
    );

    header('Content-Type: application/json');
    $jsonResponse = json_encode($response);
    echo $jsonResponse;

    exit();
}