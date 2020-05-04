<?php

require_once '../includes/helpers.php';

session_start();

$pending = isset($_GET['s']) ? $_GET['s'] : null;
$user_id = isset($_GET['id']) ? $_GET['id'] : null;
$pending_request = checkFriend($_SESSION['auth_id'], $user_id);

if ($pending === '0') {
    if ($pending_request == false) {
        addFriend(1, $_SESSION['auth_id'], $user_id);
        $pathSuccess =  "/mse/profile.php?id=$user_id";
        header('Location: '. $pathSuccess);
    }
    else {
        $pathError =  "/mse/profile.php?id=$user_id";
        header('Location: '. $pathError);
    }
}
elseif ($pending === '1') {
    acceptFriendRequest(2, $_SESSION['auth_id'], $user_id);
    $pathSuccess =  "/mse/profile.php?id=$user_id";
    header('Location: '. $pathSuccess);
}
elseif ($pending === '2') {
    deleteFriend(2, $_SESSION['auth_id'], $user_id);
    $pathSuccess =  "/mse/profile.php?id=$user_id";
    header('Location: '. $pathSuccess);
}