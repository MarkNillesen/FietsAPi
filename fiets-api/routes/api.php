<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KleurController;
use App\Http\Controllers\FietsController;
use App\Http\Controllers\GeslachtController;
use App\Http\Controllers\MerkController;
use App\Http\Controllers\SoortController;

Route::apiResource('kleuren', KleurController::class);
Route::apiResource('geslachten', GeslachtController::class);
Route::apiResource('fietsen', FietsController::class);
Route::apiResource('merken', MerkController::class);
Route::apiResource('soorten', SoortController::class);