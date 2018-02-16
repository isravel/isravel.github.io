<?php
if(isset($_POST['submit'])) {

    if(trim($_POST['name']) == '') {
        $hasError = true;
    } else {
        $name = trim($_POST['name']);
    }

    if(trim($_POST['phone']) == '') {
        $hasError = true;
    } else {
        $phone = trim($_POST['phone']);
    }

    if(trim($_POST['email']) == '')  {
        $hasError = true;
    } else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
        $hasError = true;
    } else {
        $email = trim($_POST['email']);
    }

    if(trim($_POST['message']) == '') {
        $hasError = true;
    } else {
        if(function_exists('stripslashes')) {
            $comments = stripslashes(trim($_POST['message']));
        } else {
            $comments = trim($_POST['message']);
        }
    }

    if(!isset($hasError)) {
        $emailTo = 'cisravelraj@outlook.com';
        $body = "Name: $name \n\nEmail: $email \n\nPhone: $phone \n\nComments:\n $comments";
        $headers = 'From: Message from REAL contact form <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

        mail($emailTo, $phone, $body, $headers);
        $emailSent = true;
        header('Location: http://subhevents.com');
        die();

    }
}
?>
