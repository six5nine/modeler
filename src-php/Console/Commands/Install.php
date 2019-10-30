<?php
namespace ProcessMaker\Package\Modeler\Console\Commands;

use Illuminate\Console\Command;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'package-modeler:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info("Publishing assets");
        \Artisan::call('vendor:publish', [
            '--tag' => 'package-modeler',
            '--force' => true
        ]);
        $this->info('Modeler has been installed');
    }
}
