<?php

include('database.php');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        handle_get_request();
        break;
    default:
        http_response_code(405);  // Method not allowed
        exit(0);
}

function handle_get_request() {
    global $db;

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');

    if (!$db) {
        http_response_code(500);
        echo json_encode(["error" => "Kan geen verbinding maken met de database."]);
        exit(0);
    }

    // Haal alle kleuren op
    $sql = "SELECT * FROM kleuren";
    $res = mysqli_query($db, $sql);

    if (!$res) {
        http_response_code(500);
        echo json_encode(["error" => "Fout bij het ophalen van gegevens: " . mysqli_error($db)]);
        exit(0);
    }

    $resultaat = array();
    while ($row = mysqli_fetch_assoc($res)) {
        $resultaat[] = $row;
    }

    echo json_encode($resultaat);
}