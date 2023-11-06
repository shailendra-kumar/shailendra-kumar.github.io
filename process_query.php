<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $query = $_POST["query"];

    // Replace with your email address
    $to = "your@email.com";
    $subject = "New Query from $name";
    $messageBody = "Name: $name\nEmail: $email\n\nQuery:\n$query";

    // Send email
    mail($to, $subject, $messageBody, "From: $email");

    // Respond to the client
    echo "Thank you for submitting your query!";
} else {
    // If not a POST request, show an error message
    echo "Invalid request";
}
?>
