<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post; 


class PostsController extends Controller
{

    

    public function index(){
        $posts = Post::get(); 
        return view('main.pages.posts', ['posts'=>$posts        ]
    );
    }

    public function addpost(Request $request){
        // add post to db 
        // dd(auth()->id());

        $this->validate($request, [
            'body'=>'required', 
            'name'=> 'required', 
            'source'=>'required' 
        ]); 

        auth()->user()->posts()->create([
            'body' => $request->body, 
            'name' =>$request->name, 
            'source' => $request->source
        ]); 

        return back(); 
    }
}
