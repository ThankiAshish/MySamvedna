<?php
include '../includes/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = mysqli_query($conn, "SELECT * FROM cities");
    echo '<option value="" disabled selected>Select Job Location</option>';
    while ($datarow = mysqli_fetch_array($data)) {
        echo '<option value="' . $datarow['id'] . '">' . $datarow['name'] . '</option>';
    }
}
