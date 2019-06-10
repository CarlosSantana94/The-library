<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('books','ControllerAPI@getAllBooks')->name('getAllBooks');
Route::post('books','ControllerAPI@addBook')->name('addBook');
Route::get('books/{id}','ControllerAPI@getBookById')->name('getBookById');
Route::put('books/{id}','ControllerAPI@editBookById')->name('editBookById');
Route::delete('books/{id}','ControllerAPI@deleteBookById')->name('deleteBookById');
