<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KleurController;
use App\Http\Controllers\FietsController;

Route::apiResource('kleuren', KleurController::class);
Route::apiResource('fietsen', FietsController::class);
