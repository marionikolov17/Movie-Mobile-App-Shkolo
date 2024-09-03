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
            'resume' => 'Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.',
            'imageUrl' => 'https://deadline.com/wp-content/uploads/2024/01/Deadpool.jpg?w=681&h=383&crop=1',
            'genre' => 'Action',
            'hashtags' => ['Action', 'Marvel'],
            'createdAt' => '2024-08-22'
        ],
        [
            'id' => 2,
            'name' => 'Spider-Man',
            'year' => 2022,
            'rating' => 5,
            'totalVotes' => 47696,
            'resume' => "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
            'imageUrl' => 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png',
            'genre' => 'Action',
            'hashtags' => ['Action', 'Spiderman'],
            'createdAt' => '2024-06-20'
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
            'resume' => 'Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.',
            'imageUrl' => 'https://deadline.com/wp-content/uploads/2024/01/Deadpool.jpg?w=681&h=383&crop=1',
            'genre' => 'Action',
            'hashtags' => ['Action', 'Marvel'],
            'createdAt' => '2024-08-22'
        ],
        2 => [
            'id' => 2,
            'name' => 'Spider-Man',
            'year' => 2022,
            'rating' => 5,
            'totalVotes' => 47696,
            'resume' => "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
            'imageUrl' => 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png',
            'genre' => 'Action',
            'hashtags' => ['Action', 'Spiderman'],
            'createdAt' => '2024-06-20'
        ],
    ];

    if (array_key_exists($id, $movies)) {
        return response()->json($movies[$id]);
    } else {
        return response()->json(['message' => 'Movie not found'], 404);
    }
});
