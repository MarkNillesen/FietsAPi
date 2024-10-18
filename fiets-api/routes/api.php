<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KleurController;
use App\Http\Controllers\FietsController;
use App\Http\Controllers\GeslachtController;
use App\Http\Controllers\MerkController;
use App\Http\Controllers\SoortController;
use App\Http\Controllers\AuthController;

Route::apiResource('kleuren', KleurController::class);
Route::apiResource('geslachten', GeslachtController::class);
Route::apiResource('fietsen', FietsController::class);
Route::apiResource('merken', MerkController::class);
Route::apiResource('soorten', SoortController::class);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('profile', function(Request $request) {
        return auth()->user();
    });

    Route::apiResource('werknemers', WerknemerController::class);
    Route::apiResource('functies', FunctieController::class)->parameters(['functies' => 'functie'])->only(['index', 'show']);
    Route::post('/logout', [AuthController::class, 'logout']);
});