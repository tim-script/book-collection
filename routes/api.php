<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(AuthorController::class)->group(function () {
    Route::get('/authors', 'index');
    Route::post('/authors', 'store');
    Route::patch('/authors/{author}', 'update');
    Route::delete('/authors/{author}', 'destroy');
});

Route::controller(BookController::class)->group(function () {
    Route::get('/books', 'index');
    Route::post('/books', 'store');
    Route::patch('/books/{book}', 'update');
    Route::delete('/books/{book}', 'destroy');
});
