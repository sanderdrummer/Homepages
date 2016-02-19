<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/player', 'HomeController@playerstart');
Route::post('/player','HomeController@playername');


Route::post('/player/midquestions', 'HomeController@midquestions');
Route::post('/player/midquestions/done', 'HomeController@midquestionsdone');
Route::get('/player/questions', 'HomeController@questions');
Route::get('/player/questions/done', 'HomeController@questionsdone');




Route::get('/adminstart', 'HomeController@adminstart');
Route::get('adminstart/results', 'HomeController@results');
Route::get('adminstart/results/only', 'HomeController@resultsonly');
Route::get('adminstart/admin', 'HomeController@admin');
Route::post('adminstart/admin', 'HomeController@adminchange');
Route::get('adminstart/admin/neuefrage', 'HomeController@adminNeueFrage');
Route::get('adminstart/admin/bearbeite', 'HomeController@adminBearbeite');





