@extends('main.layout.app')
@section('content')
<a href="{{route('posts')}}"><i class="fas fa-arrow-circle-left"></i></a>

<div class="posts-container">
 
    <div class="post-details">
            <div>
                <a href=""><i class="fas fa-pen-square"></i></a>
                <a href=""><i class="fas fa-trash-alt"></i></a>
            </div>
        <div>
            <h1>Nom:<span>{{$post->name}}</span></h1>
            <h1>Description:<span>{{$post->body}}</span></h1>
            <h1>Source:<span>{{$post->source}}</span></h1>
        </div>
        <a href=""><i class="fas fa-thumbs-up"></i></a>
    </div>
</div>


@endsection 