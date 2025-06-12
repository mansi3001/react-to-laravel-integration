<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/create', function () {
    return Inertia::render('CreateCard');
})->name('create.card');

Route::get('/review-dashboard', function () {
    return Inertia::render('ReviewDashboard');
})->name('review.dashboard');

Route::get('{any?}', function () {
    return Inertia::render('Errors/NotFound');
})->where('any', '^(?!api/).*$');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
