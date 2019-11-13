import { startEvent } from '@modeler';
console.log("Listening for modeler-init from test.js");
window.ProcessMaker.EventBus.$on('modeler-init', ({registerNode, registerBpmnExtension}) => {
    console.log("------ MODELER INIT FROM test.js");
    registerNode(startEvent);
});