<?php

namespace App\Providers;
use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });
    
        Inertia::share([
            'app.name' => config('app.name'),
            'csrf_token' => csrf_token(),
        ]);
    }
}
