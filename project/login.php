<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
</head>
<body>
    <?php
        session_start(); 
        
        include 'Login.html';

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $servername = "127.0.0.1";
            $username = "root";
            $password = "root";
            $dbname = "ecs417";

            $conn = new mysqli($servername, $username, $password, $dbname);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $email = $_POST["Email"];
            $password = $_POST["Password"];

            $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $_SESSION['user_id'] = $email; 
                header("Location: AddPost.php");
                exit();
            } else {
                echo "<aside>Invalid email or password</aside>";
            }

            $conn->close();
        }
    ?>
</body>
</html>