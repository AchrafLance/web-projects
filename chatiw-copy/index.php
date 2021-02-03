<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>

<body class="index-page">
    <div class="login-page">
        <div class="section1">
            <img class="logo" src="./imgs/logo.jpg" alt="websote-logo"><br>
            <div class="form-container">
                <form action="chatting.php" method="POST">

                    <!-- nickname Fields -->
                    <img class="form-icon" src="./imgs/person-icon.png" alt="">
                    <label class="form-label" for="Nickname">Nickname:</label>
                    <input class="nickname-input" type="text" name="nickname" placeholder="Nickname"><br>

                    <!-- age Fields -->
                    <img class="form-icon" src="./imgs/age-icon.png" alt="">
                    <label class="form-label" for="age">Age: </label>
                    <select name="age" id="age">
                        <?php
                         for($x = 18; $x<=90; $x++){
                         echo "<option value=".$x.">".$x."</option>";
                         }
                         ?>
                    </select><br>

                    <!-- sex field -->
                    <div class="gender-input">
                        <label class="form-label" for="sex">Sex:</label>
                        <img class="form-icon" src="./imgs/male-icon.png" alt="male-icon">
                        <label for="male">Male</label>
                        <input type="radio" name="sex" value="male">
                        <img class="form-icon" src="./imgs/female-icon.png" alt="female-icon">
                        <label for="female">Female</label>
                        <input type="radio" name="sex" value="female"><br>
                    </div>

                    <!-- country field -->
                    <img src="./imgs/world-icon.png" alt="" class="form-icon">
                    <label class="form-label" for="country">Country</label>
                    <select id="country" name="country">
                        <option value="Morocco">Morocco</option>
                    </select><br>

                    <!-- city field -->
                    <img class="form-icon" src="./imgs/location-icon.jpg" alt="">
                    <label class="form-label" for="city">City:</label>
                    <select name="city">
                        <option value="Marrakech">Marrakech</option>
                    </select><br>

                    <!-- submit button -->
                    <input class="submit-button" type="submit" value="start chat now!">
                    <p class="submit-description">by starting chat, you agree to our <a href="./terms-of-service.html"
                            target="_blank">term of service</a></p>

                </form>
            </div> <!-- end of form container -->
        </div> <!-- end of section1 -->
        <div class="section2">
        </div>
    </div> <!-- end of login page -->
    <div class="section3">
    </div>



    </div>


</body>

</html>