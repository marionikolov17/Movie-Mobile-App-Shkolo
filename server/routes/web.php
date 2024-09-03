<?php

use Illuminate\Support\Facades\Route;

Route::get('/movies', function () {
    $movies = [
        [
            'id' => 1,
            'name' => 'Deadpool 3',
            'year' => 2024,
            'rating' => 5,
            'totalVotes' => 4769,
            'resume' => 'test resume',
            'imageUrl' => 'https://deadline.com/wp-content/uploads/2024/01/Deadpool.jpg?w=681&h=383&crop=1',
            'genre' => 'Action',
            'hashtags' => ['Action', 'Marvel']
        ],
        [
            'id' => 2,
            'name' => 'Deadpool 2',
            'year' => 2024,
            'rating' => 5,
            'totalVotes' => 4769,
            'resume' => 'test',
            'imageUrl' => 'https://deadline.com/wp-content/uploads/2024/01/Deadpool.jpg?w=681&h=383&crop=1',
            'genre' => 'Action',
            'hashtags' => ['Action', 'Marvel']
        ],
    ];

    return response()->json($movies);
});

Route::get('/movies/{id}', function ($id) {
    $movies = [
        1 => [
            'id' => 1,
            'name' => 'Deadpool 3',
            'year' => 2024,
            'rating' => 5,
            'totalVotes' => 4769,
            'resume' => 'test resume',
            'imageUrl' => 'https://deadline.com/wp-content/uploads/2024/01/Deadpool.jpg?w=681&h=383&crop=1',
            'genre' => 'Action',
            'hashtags' => ['Action', 'Marvel']
        ],
        2 => [
            'id' => 2,
            'name' => 'Deadpool 2',
            'year' => 2024,
            'rating' => 5,
            'totalVotes' => 4769,
            'resume' => 'test',
            'imageUrl' => 'https://deadline.com/wp-content/uploads/2024/01/Deadpool.jpg?w=681&h=383&crop=1',
            'genre' => 'Action',
            'hashtags' => ['Action', 'Marvel']
        ],
    ];

    if (array_key_exists($id, $movies)) {
        return response()->json($movies[$id]);
    } else {
        return response()->json(['message' => 'Movie not found'], 404);
    }
});
