
@extends('main.layout.app')
@section('content')

@auth

<span class="btn btn-5 create-btn">Ajouter</span> 

<!-- <button class="create-btn">Add Word</button> -->
@endauth
<!-- post creation form  -->
<div class="create-post">

    <form action="{{ route('posts') }}" method="post" class="post-form">
        @csrf
        <i class="fas fa-times-circle"></i>
        <h1 class="form-title">Add un nouveau mot</h1>
        
        <div class="post-body">
            <input type="text" name="name" placeholder="Nom">
        </div>

        <div class="post-description">
            <textarea name="body" rows=7 placeholder="Description" id="post-description"
                placeholder="post something!"></textarea>
        </div>

        <div class="post-source">
            <input type="text" name="source" placeholder="Source">
        </div>

        <button type="submit" class="btn5">Ajouter</button>
    </form>
</div>

<!-- -------------------
      POSTS Search Bar 
------------------- -->
<div class="search-content">
    <div class="search-img"><img src="/media/dictionar-straight.png" alt="search-img"></div>
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
</div>


@endsection 