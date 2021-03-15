<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\PostController;





/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'signup']); 

Route::get('/login', [LoginController::class, 'index'])->name('login'); 
Route::post('/login', [LoginController::class, 'signin']); 

Route::get('/logout', [LogoutController::class, 'logout'])->name('logout'); 



Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/', [DashboardController::class, 'index']);

Route::get('/posts', [PostsController::class, 'index'])->name('posts');
Route::post('/posts', [PostsController::class, 'addPost']);

Route::get('/post/{id}', [PostController::class, 'index'])->name('post');

Route::get('/manuel-de-procedure', function(){
    return view('main.pages.manuel-de-procedure');
})->name('manuel-de-procedure');

Route::get('/fiche-de-poste', function(){
    return view('main.pages.fiche-de-poste');
})->name('fiche-de-poste'); 

Route::get('/textes-reglementaires', function(){
    return view('main.pages.textes-reglementaires');
})->name('textes-reglementaires'); 