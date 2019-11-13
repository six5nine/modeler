import Vue from 'vue';
import ModelerApp from "./components/ModelerApp";
import * as VueDeepSet from "vue-deepset";




import { startEvent, endEvent } from '@modeler';
console.log("Listening for modeler-init");
window.ProcessMaker.EventBus.$on('modeler-init', ({registerNode, registerBpmnExtension}) => {
    console.log("MODELER INIT FROM index.js");
    registerNode(endEvent);
});





Vue.use(VueDeepSet);

new Vue({
    render: h => h(ModelerApp)
}).$mount("#modeler-app");
