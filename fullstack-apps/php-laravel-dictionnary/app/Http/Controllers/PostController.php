<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post; 


class PostController extends Controller
{
    //
    public function index($id){
        $post = Post::find($id); 

        return view('main.pages.post', ['post'=> $post]);

    }
}
