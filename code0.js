gdjs.title_32instructionsCode = {};
gdjs.title_32instructionsCode.GDBlueBackgroundObjects1= [];
gdjs.title_32instructionsCode.GDBlueBackgroundObjects2= [];
gdjs.title_32instructionsCode.GDTitleObjects1= [];
gdjs.title_32instructionsCode.GDTitleObjects2= [];
gdjs.title_32instructionsCode.GDTheGameObjects1= [];
gdjs.title_32instructionsCode.GDTheGameObjects2= [];
gdjs.title_32instructionsCode.GDInstructionsObjects1= [];
gdjs.title_32instructionsCode.GDInstructionsObjects2= [];
gdjs.title_32instructionsCode.GDStartObjects1= [];
gdjs.title_32instructionsCode.GDStartObjects2= [];
gdjs.title_32instructionsCode.GDBlueLaser14Objects1= [];
gdjs.title_32instructionsCode.GDBlueLaser14Objects2= [];

gdjs.title_32instructionsCode.conditionTrue_0 = {val:false};
gdjs.title_32instructionsCode.condition0IsTrue_0 = {val:false};
gdjs.title_32instructionsCode.condition1IsTrue_0 = {val:false};


gdjs.title_32instructionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.title_32instructionsCode.condition0IsTrue_0.val = false;
{
gdjs.title_32instructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.title_32instructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "base scene", false);
}}

}


{


{
}

}


};

gdjs.title_32instructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.title_32instructionsCode.GDBlueBackgroundObjects1.length = 0;
gdjs.title_32instructionsCode.GDBlueBackgroundObjects2.length = 0;
gdjs.title_32instructionsCode.GDTitleObjects1.length = 0;
gdjs.title_32instructionsCode.GDTitleObjects2.length = 0;
gdjs.title_32instructionsCode.GDTheGameObjects1.length = 0;
gdjs.title_32instructionsCode.GDTheGameObjects2.length = 0;
gdjs.title_32instructionsCode.GDInstructionsObjects1.length = 0;
gdjs.title_32instructionsCode.GDInstructionsObjects2.length = 0;
gdjs.title_32instructionsCode.GDStartObjects1.length = 0;
gdjs.title_32instructionsCode.GDStartObjects2.length = 0;
gdjs.title_32instructionsCode.GDBlueLaser14Objects1.length = 0;
gdjs.title_32instructionsCode.GDBlueLaser14Objects2.length = 0;

gdjs.title_32instructionsCode.eventsList0(runtimeScene);
return;

}

gdjs['title_32instructionsCode'] = gdjs.title_32instructionsCode;
