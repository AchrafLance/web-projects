@extends('main.layout.app')
@section('content')
<div class="login-page">
    <h1 class="login-title">Login</h1>
    @if(@session('status'))
    <div class="login-status">{{session('status')}}</div>
    @endif
    <div class="form">
        <form action="{{ route('login') }}" method="post">
             @csrf
            <div class="email">
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="email"  @error('email') class="error" @enderror value="{{ old('email') }}">
            @error('email')
                <small>{{$message}}</small>
                @enderror
                </div>
        
            <div class="password">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="password"  @error('password') class="error" @enderror>
            @error('password')
                <small>{{$message}}</small>
                @enderror
                </div>
        
            <button type="submit">Login</button>
        </form>
    </div>
</div>
@endsection