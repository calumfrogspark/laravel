<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * requiring the routing class
 */
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/**
 * requiring controller classes for routing
 */
use App\Http\Controllers\SiteController;

//homepage route
Route::get('/', [SiteController::class, 'getHomePage']);

//example with optional parameter
//Route::get('blog/{slug?}', 'DemoController@getBlogPage');

//example with required parameter
//Route::get('blog/{slug}', 'DemoController@getBlogPage');

//form route
//Route::post('/process-form', 'DemoController@loginProcess');

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
