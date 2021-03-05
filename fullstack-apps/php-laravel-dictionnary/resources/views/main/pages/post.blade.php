@extends('main.layout.app')
@section('content')

<div class="post-details">
    <h1>Name:<span>{{$post->name}}</span></h1>
    <h1>Description:<span>{{$post->body}}</span></h1>
    <h1>Source:<span>{{$post->source}}</span></h1>
</div>


@endsection 