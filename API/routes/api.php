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
// BOOKS API ROUTES
Route::get('books','ControllerAPI@getAllBooks')->name('getAllBooks');
Route::post('books','ControllerAPI@addBook')->name('addBook');
Route::get('books/{id}','ControllerAPI@getBookById')->name('getBookById');
Route::put('books/{id}','ControllerAPI@editBookById')->name('editBookById');
Route::delete('books/{id}','ControllerAPI@deleteBookById')->name('deleteBookById');
Route::get('books/available/{id}/{user}','ControllerAPI@changeAvailability')->name('changeAvailability');
Route::get('books/search/{searchTerm}','ControllerAPI@findBook')->name('findBook');

// CATEGORY API ROUTES
Route::get('category','ControllerAPI@getAllCategories')->name('getAllCategories');
Route::post('category','ControllerAPI@addCategory')->name('addCategory');
Route::get('category/{id}','ControllerAPI@getCategoryById')->name('getCategoryById');
Route::put('category/{id}','ControllerAPI@editCategoryById')->name('editCategoryById');
Route::delete('category/{id}','ControllerAPI@deleteCategoryById')->name('deleteCategoryById');
Route::get('category/assign/{bookId}','ControllerAPI@assignBook')->name('assignBook');
