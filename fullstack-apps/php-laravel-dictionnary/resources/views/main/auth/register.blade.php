@extends('/main/layout/app')
@section('content')
<h1 class="title">Registration Form</h1>
<form action="{{ route('register') }}" method="post" class="form">
    @csrf
    <div class="name">
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="username" @error('username') class="error" @enderror value="{{ old('username') }}">
    </div>
    @error('username')
        <small>{{$message}}</small>
        @enderror
  
    <div class="email">
        <label for="email">Email</label>
        <input type="text" name="email" placeholder="email" @error('email') class="error" @enderror value = "{{ old('email') }}">
    </div>
    @error('email')
        <small>{{$message}}</small>
        @enderror
    <div class="password">
        <label for="password">Password</label>
        <input type="password" name="password"placeholder="password" @error('password') class="error" @enderror>
    </div>
    @error('password')
        <small>{{$message}}</small>
        @enderror
    <div class="confirm-password">
        <label for="password_confirmation">Confirm-Password</label>
        <input type="password" name="password_confirmation" placeholder="confirm password" @error('password') class="error" @enderror>
    </div>
    <div class="submit">
        <button type="submit">Submit</button>
    </div>
</form>
@endsection