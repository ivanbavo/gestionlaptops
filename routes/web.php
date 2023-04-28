<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ClientesController;
use App\Http\Controllers\AlquileresController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/clientes', [ClientesController::class, 'index'])->name('clientes.index');
    Route::get('/alquileres', [AlquileresController::class, 'index'])->name('alquileres.index');
    Route::post('/crear_alquiler', [AlquileresController::class, 'create'])->name('alquileres.create');
    Route::post('eliminar_alquiler', [AlquileresController::class, 'destroy'])->name('alquileres.destroy');
    Route::post('actualizar_alquiler', [AlquileresController::class, 'update'])->name('alquileres.update');
    Route::post('alquileres_por_empresa', [AlquileresController::class, 'alquileresPorEmpresa'])->name('alquileres.alquileresPorEmpresa');
});

