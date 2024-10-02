<?php
define('SERVERNAME', "localhost");
define('DATABASENAME', "fietsen_db");
define('USERNAME', "root");
define('PASSWORD', "");

$db = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DATABASENAME);
if (!$db) {
    die("Verbinding mislukt: " . mysqli_connect_error());
}
?>