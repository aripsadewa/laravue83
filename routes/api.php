<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\SubjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('notes')->group(function () {
    Route::post('create-new-note', [NoteController::class, 'store']);
    Route::get('', [NoteController::class, 'index']);
    Route::get('{note:slug}', [NoteController::class, 'show'])->name('notes.show');
});

Route::prefix('subject')->group(function () {
    Route::get('', [SubjectController::class, 'index']);
});
