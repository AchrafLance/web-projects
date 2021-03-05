
@extends('main.layout.app')
@section('content')

@auth
<button class="create-btn">Create Post</button>
@endauth
<!-- post creation form  -->
<div class="create-post">
    <i class="fas fa-times-circle"></i>
    <h1 class="form-title">Create Post</h1>
    <form action="{{ route('posts') }}" method="post" class="post-form">
        @csrf
        <div class="post-body">
            <input type="text" name="name" placeholder="Name">
        </div>

        <div class="post-description">
            <textarea name="body" rows=7 placeholder="Description"  id="post-description" placeholder="post something!" @error('body') class="error"
                @enderror></textarea>
            @error('body')
            <small>{{$message}}</small>
            @enderror
        </div>

        <div class="post-source">
            <input type="text" name="source" placeholder="source">
        </div>

        <button type="submit">Create Post</button>
    </form>
</div>

<!-- -------------------
      POSTS Search Bar 
------------------- -->
<div class="search-img"><img src="/media/search.png" alt="search-img"></div>
<div class="search-container">
    <div class="search-bar">
        <div class="search-icon"><i class="fas fa-search"></i></div>
        <input id="searchInput" type="text" placeholder="search..">
    </div>
</div>
<div class="search-dropdown hidden">
    @foreach($posts as $item)
    <a class="post" href="{{ url('post/'.$item->id) }}">
        <strong>{{$item->name}}</strong> <span>{{$item->created_at->diffForHumans()}}</span>
</a>
    @endforeach
</div>


@endsection 