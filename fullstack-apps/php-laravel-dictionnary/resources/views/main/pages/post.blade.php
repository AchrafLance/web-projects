@extends('main.layout.app')
@section('content')
<a href="{{route('posts')}}"><i class="fas fa-arrow-circle-left"></i></a>

<div class="posts-container">
    <div class="post-details">
        <h1>Name:<span>{{$post->name}}</span></h1>
        <h1>Description:<span>{{$post->body}}</span></h1>
        <h1>Source:<span>{{$post->source}}</span></h1>
    </div>
</div>


@endsection 