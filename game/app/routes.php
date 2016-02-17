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


Route::get('/', 'HomeController@start');
Route::get('/player','HomeController@createplayer');

Route::post('/player/data','HomeController@writedata');

Route::post('/player/midquestions', 'HomeController@midquestions');
Route::post('/player/midquestions/done', 'HomeController@midquestionsdone');
Route::post('/player/end', 'HomeController@end');
Route::post('/player/end/done', 'HomeController@enddone');
Route::post('/player/end/test', 'HomeController@endtest');
Route::post('/player/end/test/done', 'HomeController@endtestdone');

Route::get('/adminstart', 'HomeController@adminstart');
Route::get('/adminstart/statistics', 'HomeController@statistics');
Route::get('adminstart/results', 'HomeController@results');
Route::get('adminstart/results/only', 'HomeController@resultsonly');
Route::get('adminstart/admin', 'HomeController@admin');
Route::post('adminstart/admin', 'HomeController@adminchange');
Route::get('adminstart/admin/neuefrage', 'HomeController@adminNeueFrage');
Route::get('adminstart/admin/bearbeite', 'HomeController@adminBearbeite');





