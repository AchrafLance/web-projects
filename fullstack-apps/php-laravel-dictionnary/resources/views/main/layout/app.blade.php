
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('/scss/css/main.css') }}"> 
    <link rel="icon" href="/media/favicon.png">
    <title>Dictionary | CHU</title>
    <script src="https://kit.fontawesome.com/d90f2c9be0.js" crossorigin="anonymous"></script>
</head>
<body>

<div class="dark-backround"></div>

<div class="nav-bar">
    <div class="left-side">
        <ul>
        <li><a href="{{ route('dashboard') }}">Home</a></li>
        <li><a href="{{ route('posts') }} ">Dictionnaire</a></li>
        <li><a href="{{ route('manuel-de-procedure') }}">Manuel de Procédure</a></li>
        <li><a href="{{ route('fiche-de-poste') }}">Fiche de Poste</a></li>
        <li><a href="{{ route('textes-reglementaires') }}">Textes Reglementaires</a></li>
        </ul>
    </div>
    <div class="right-side">
        <ul>
        @auth
        <li><a href="#">Hello {{ auth()->user()->name }}</a></li>
        <li><a href="{{ route('logout') }}">Logout</a></li>
        @endauth
        @guest
            <li><a href="{{ route('login') }}">Login</a></li>
            <li><a href="{{ route('register') }}">Register</a></li>
        @endguest
        </ul>
    </div>
</div>
    <div class="content">@yield('content')</div>
    <script src="{{ asset('/js/main.js') }}"></script>
</body>
</html>