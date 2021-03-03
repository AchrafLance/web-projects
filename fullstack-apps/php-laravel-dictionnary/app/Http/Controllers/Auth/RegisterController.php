<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User; 
use Illuminate\Support\Facades\Hash; 

class RegisterController extends Controller
{


    public function index(){
        return view('/main.auth.register'); 
    }

    public function signup(Request $request){

       $this->validate($request, [
        'username' => 'required|max:255', 
       'email' => 'required|email', 
       'password' => 'required|confirmed'
       ]); 

       User::create([
           'name' => $request->username,
           'email' => $request->email,
           'password' => Hash::make($request->password)  
       ]); 

       //sign in 
       auth()->attempt($request->only('email', 'password'));

       return redirect()->route('dashboard'); 

       
    }
}
