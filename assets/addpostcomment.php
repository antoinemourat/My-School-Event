<?php

require_once '../includes/helpers.php';
$post_id = isset($_GET['id']) ? $_GET['id'] : null;

$data = [];
$fields = [];
$errored = false;

session_start();

foreach ($_POST as $name => $value) {
    $data[$name] = $value;
}

if ($errored) {
    session_start();
    $_SESSION['fields'] = $fields;

    $pathError = $_SERVER['HTTP_REFERER'];
    header("Location: $pathError");
}
else {
    addPostComment($_SESSION['auth_id'], $post_id, $data);

    $pathSuccess = $_SERVER['HTTP_REFERER'];
    header("Location: $pathSuccess");
}