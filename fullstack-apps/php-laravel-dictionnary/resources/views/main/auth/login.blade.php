@extends('main.layout.app')
@section('content')
<div class="login-page">
    <h1 class="login-title">Login!</h1>
    @if(@session('status'))
    <div class="login-status">{{session('status')}}</div>
    @endif
    <div class="login-form-container">
        <form action="{{ route('login') }}" method="post" class="login-form">
             @csrf
            <div class="email-container">
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="Email" @error('email') class="error" @enderror
                    value="{{ old('email') }}">
                @error('email')
                <small>{{$message}}</small>
                @enderror

            </div>
            
        
            <div class="password-container">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password"  @error('password') class="error" @enderror>
                @error('password')
                <small>{{$message}}</small>
                @enderror   
            </div>
                   
                
        
            <div class=button-container><button type="submit">Login</button></div>
            <div class="forgot-password"><a href="#">Forgot Password?</a></div>
        </form>
    </div>
</div>
@endsection