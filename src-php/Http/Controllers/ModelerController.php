<?php

namespace ProcessMaker\Package\Modeler\Http\Controllers;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Models\Process;
use ProcessMaker\Package\Modeler\Events\ModelerStarting;
use ProcessMaker\Package\Modeler\Managers\ModelerManager;

class ModelerController extends Controller
{

    /**
     * Invokes the Process Modeler for rendering.
     * @param ModelerManager $manager
     * @param Process $process
     * @return
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
