<?php
namespace ProcessMaker\Package\Modeler;

use Illuminate\Support\ServiceProvider;
use ProcessMaker\Package\Modeler\Console\Commands\Install;

class ModelerServiceProvider extends ServiceProvider {
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                Install::class,
            ]);
        }

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/processmaker/packages/package-modeler'),
        ], 'package-modeler');

        $this->loadViewsFrom(__DIR__ . '/../resources/views/', 'package-modeler');
    }
}