<?php
include '../includes/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $stmt = $conn->prepare("SELECT * FROM job_seeker where email = ?");
    $stmt->bind_param("s", $_POST['email']);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $message = 'Email already exists';
        $response = array(
            'success' => false,
            'message' => $message,
        );

        header('Content-Type: application/json');
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        exit();
    }

    $companyName = $data['companyName'];
    $website = $data['website'];
    $natureOfBusiness = $data['natureOfBusiness'];
    $address = $data['address'];
    $fax = $data['fax'];
    $areaCode = $data['areaCode'];
    $landline = $data['landline'];
    $mobile = $data['mobile'];
    $email = $data['email'];
    $employerName = $data['employerName'];
    $companyDescription = $data['companyDescription'];
    $jobDesignation = $data['jobDesignation'];
    $jobType = $data['jobType'];
    $dutyDescription = $data['dutyDescription'];
    $essentialQualificationEssential = $data['essentialQualification']['essential'];
    $essentialQualificationDesirable = $data['essentialQualification']['desirable'];
    $ageLimit = $data['ageLimit'];
    $womenEligible = $data['womenEligible'];
    $workingHoursFrom = $data['workingHours']['from'];
    $workingHoursTo = $data['workingHours']['to'];
    $vacanciesRegular = $data['vacancies']['regular'];
    $vacanciesTemporary = $data['vacancies']['temporary'];
    $payAndAllowances = $data['payAndAllowances'];
    $placeOfWork = $data['placeOfWork'];
    $resumesToBeSent = $data['resumesToBeSent'];
    $resumeEmail = $data['resumeEmail'];
    $interviewDetailsDate = $data['interviewDetails']['date'];
    $interviewDetailsTime = $data['interviewDetails']['time'];
    $interviewDetailsAptitudeTest = $data['interviewDetails']['aptitudeTest'];
    $interviewDetailsTechnicalTest = $data['interviewDetails']['technicalTest'];
    $interviewDetailsGroupDiscussion = $data['interviewDetails']['groupDiscussion'];
    $interviewDetailsPersonalInterview = $data['interviewDetails']['personalInterview'];
    $interviewDetailsTopics = $data['interviewDetails']['topics'];
    $interviewDetailsContactPerson = $data['interviewDetails']['contactPerson'];
    $disabilityInfoType = $data['disabilityInfo']['type'];
    $disabilityInfoPercentage = $data['disabilityInfo']['percentage'];
    $disabilityInfoAidOrAppliance = $data['disabilityInfo']['aidOrAppliance'];
    $ownVehiclePreferred = $data['ownVehiclePreferred'];
    $conveyanceProvided = $data['conveyanceProvided'];
    $conveyanceType = $data['conveyanceType'];
    $otherInformation = $data['otherInformation'];
    

    $sql = "INSERT INTO `job_seeker`(`email`, `username`, `password`, `name`,`lastName`,
    `dob`, `gender`, `permanentAddress`, `currentAddress`,`city`,
     `state`, `postalCode`, `country`, `contactNumber`,`whatsappNumber`,
      `jobAlerts`, `homePhone`, `addHomePhone`, `qualification`,`educationSpecialization`,
       `experienceAndAppliance`, `yesNoQuestion`, `twoWheeler`, `threeWheeler`, `car`, `specializationInDisability`) VALUES
        (?,?,?,?,?,?
        ,?,?,?,?,?,?
        ,?,?,?,?,?,?,
        ?,?,?,?,?,?,
        ?,?)";
   
   $stmt = $conn->prepare($sql);
   
   // Bind the data to the SQL statement
   $stmt->bind_param(
       "ssssssssssssssssssssssssss",
       $email,
       $username,
       $password,
       $name,
       $lastName,
       $dob,
       $gender,
       $permanentAddress,
       $currentAddress,
       $city,
       $state,
       $postalCode,
       $country,
       $contactNumber,
       $whatsappNumber,
       $jobAlerts,
       $homePhone,
       $addHomePhone,
       $qualification,
       $educationSpecialization,
       $experienceAndAppliance,
       $yesNoQuestion,
       $twoWheeler,
       $threeWheeler,
       $car,
       $specializationInDisability
   );
   

    if (!$stmt->execute()) {
        die('Error in execute statement: ' . $stmt->error);
    } else {
        $message = 'Registration Successful!';
        $response = array(
            'success' => true,
            'message' => $message,
        );

        header('Content-Type: application/json');
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
    }

    $stmt->close();

    $conn->close();
}
