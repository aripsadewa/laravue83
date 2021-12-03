<?php

use App\Http\Controllers\NoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('notes')->group(function () {
    Route::post('create-new-note', [NoteController::class, 'store']);
});
