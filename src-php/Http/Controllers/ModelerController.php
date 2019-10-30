<?php

namespace ProcessMaker\Package\Modeler\Http\Controllers;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Models\Process;

// TODO move to this package:
use ProcessMaker\Managers\ModelerManager;
use ProcessMaker\Events\ModelerStarting;

class ModelerController extends Controller
{

    /**
     * Invokes the Process Modeler for rendering.
     */
    public function __invoke(ModelerManager $manager, Process $process)
    {
        /**
         * Emit the ModelerStarting event, passing in our ModelerManager instance. This will 
         * allow packages to add additional javascript for modeler initialization which
         * can customize the modeler controls list.
         */
        event(new ModelerStarting($manager));
        return view('package-modeler::index', [
            'process' => $process->append('notifications', 'task_notifications'),
            'manager' => $manager
        ]);
    }
}