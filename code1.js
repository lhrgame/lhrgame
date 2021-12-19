gdjs.base_32sceneCode = {};
gdjs.base_32sceneCode.GDLizardFemaleObjects1= [];
gdjs.base_32sceneCode.GDLizardFemaleObjects2= [];
gdjs.base_32sceneCode.GDBlueLaser14Objects1= [];
gdjs.base_32sceneCode.GDBlueLaser14Objects2= [];
gdjs.base_32sceneCode.GDPinkBackgroundObjects1= [];
gdjs.base_32sceneCode.GDPinkBackgroundObjects2= [];
gdjs.base_32sceneCode.GDMoustacheObjects1= [];
gdjs.base_32sceneCode.GDMoustacheObjects2= [];
gdjs.base_32sceneCode.GDBeardObjects1= [];
gdjs.base_32sceneCode.GDBeardObjects2= [];
gdjs.base_32sceneCode.GDHairObjects1= [];
gdjs.base_32sceneCode.GDHairObjects2= [];

gdjs.base_32sceneCode.conditionTrue_0 = {val:false};
gdjs.base_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.base_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.base_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDBlueLaser14Objects1Objects = Hashtable.newFrom({"BlueLaser14": gdjs.base_32sceneCode.GDBlueLaser14Objects1});gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDMoustacheObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDBeardObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDHairObjects1Objects = Hashtable.newFrom({"Moustache": gdjs.base_32sceneCode.GDMoustacheObjects1, "Beard": gdjs.base_32sceneCode.GDBeardObjects1, "Hair": gdjs.base_32sceneCode.GDHairObjects1});gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDBlueLaser14Objects1Objects = Hashtable.newFrom({"BlueLaser14": gdjs.base_32sceneCode.GDBlueLaser14Objects1});gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDLizardFemaleObjects1Objects = Hashtable.newFrom({"LizardFemale": gdjs.base_32sceneCode.GDLizardFemaleObjects1});gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDMoustacheObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDBeardObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDHairObjects1Objects = Hashtable.newFrom({"Moustache": gdjs.base_32sceneCode.GDMoustacheObjects1, "Beard": gdjs.base_32sceneCode.GDBeardObjects1, "Hair": gdjs.base_32sceneCode.GDHairObjects1});gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDMoustacheObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDBeardObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDHairObjects1Objects = Hashtable.newFrom({"Moustache": gdjs.base_32sceneCode.GDMoustacheObjects1, "Beard": gdjs.base_32sceneCode.GDBeardObjects1, "Hair": gdjs.base_32sceneCode.GDHairObjects1});gdjs.base_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.base_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LizardFemale"), gdjs.base_32sceneCode.GDLizardFemaleObjects1);
{for(var i = 0, len = gdjs.base_32sceneCode.GDLizardFemaleObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].addPolarForce(0, 400, 0);
}
}}

}


{


gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.base_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LizardFemale"), gdjs.base_32sceneCode.GDLizardFemaleObjects1);
{for(var i = 0, len = gdjs.base_32sceneCode.GDLizardFemaleObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].addPolarForce(90, 400, 0);
}
}}

}


{


gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.base_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LizardFemale"), gdjs.base_32sceneCode.GDLizardFemaleObjects1);
{for(var i = 0, len = gdjs.base_32sceneCode.GDLizardFemaleObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].addPolarForce(180, 400, 0);
}
}}

}


{


gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.base_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LizardFemale"), gdjs.base_32sceneCode.GDLizardFemaleObjects1);
{for(var i = 0, len = gdjs.base_32sceneCode.GDLizardFemaleObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].addPolarForce(270, 400, 0);
}
}}

}


{


gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.base_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueLaser14"), gdjs.base_32sceneCode.GDBlueLaser14Objects1);
gdjs.copyArray(runtimeScene.getObjects("LizardFemale"), gdjs.base_32sceneCode.GDLizardFemaleObjects1);
{for(var i = 0, len = gdjs.base_32sceneCode.GDLizardFemaleObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].getBehavior("FireBullet").Fire((gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].getPointX("")) + 30, (gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].getPointY("")), gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDBlueLaser14Objects1Objects, 0, 600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.base_32sceneCode.GDBlueLaser14Objects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDBlueLaser14Objects1[i].setScale(0.4);
}
}{for(var i = 0, len = gdjs.base_32sceneCode.GDBlueLaser14Objects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDBlueLaser14Objects1[i].setAngle(90);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Beard"), gdjs.base_32sceneCode.GDBeardObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlueLaser14"), gdjs.base_32sceneCode.GDBlueLaser14Objects1);
gdjs.copyArray(runtimeScene.getObjects("Hair"), gdjs.base_32sceneCode.GDHairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Moustache"), gdjs.base_32sceneCode.GDMoustacheObjects1);

gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.base_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDMoustacheObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDBeardObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDHairObjects1Objects, gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDBlueLaser14Objects1Objects, false, runtimeScene, false);
}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.base_32sceneCode.GDBeardObjects1 */
/* Reuse gdjs.base_32sceneCode.GDBlueLaser14Objects1 */
/* Reuse gdjs.base_32sceneCode.GDHairObjects1 */
/* Reuse gdjs.base_32sceneCode.GDMoustacheObjects1 */
{for(var i = 0, len = gdjs.base_32sceneCode.GDBlueLaser14Objects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDBlueLaser14Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.base_32sceneCode.GDMoustacheObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDMoustacheObjects1[i].getBehavior("Health").Hit(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.base_32sceneCode.GDBeardObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDBeardObjects1[i].getBehavior("Health").Hit(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.base_32sceneCode.GDHairObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDHairObjects1[i].getBehavior("Health").Hit(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Beard"), gdjs.base_32sceneCode.GDBeardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hair"), gdjs.base_32sceneCode.GDHairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Moustache"), gdjs.base_32sceneCode.GDMoustacheObjects1);

gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDMoustacheObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDMoustacheObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDMoustacheObjects1[k] = gdjs.base_32sceneCode.GDMoustacheObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDMoustacheObjects1.length = k;for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDBeardObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDBeardObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDBeardObjects1[k] = gdjs.base_32sceneCode.GDBeardObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDBeardObjects1.length = k;for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDHairObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDHairObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDHairObjects1[k] = gdjs.base_32sceneCode.GDHairObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDHairObjects1.length = k;}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.base_32sceneCode.GDBeardObjects1 */
/* Reuse gdjs.base_32sceneCode.GDHairObjects1 */
/* Reuse gdjs.base_32sceneCode.GDMoustacheObjects1 */
{for(var i = 0, len = gdjs.base_32sceneCode.GDMoustacheObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDMoustacheObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.base_32sceneCode.GDBeardObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDBeardObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.base_32sceneCode.GDHairObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDHairObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Beard"), gdjs.base_32sceneCode.GDBeardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hair"), gdjs.base_32sceneCode.GDHairObjects1);
gdjs.copyArray(runtimeScene.getObjects("LizardFemale"), gdjs.base_32sceneCode.GDLizardFemaleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Moustache"), gdjs.base_32sceneCode.GDMoustacheObjects1);

gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.base_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDLizardFemaleObjects1Objects, gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDMoustacheObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDBeardObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDHairObjects1Objects, false, runtimeScene, false);
}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.base_32sceneCode.GDBeardObjects1 */
/* Reuse gdjs.base_32sceneCode.GDHairObjects1 */
/* Reuse gdjs.base_32sceneCode.GDLizardFemaleObjects1 */
/* Reuse gdjs.base_32sceneCode.GDMoustacheObjects1 */
{for(var i = 0, len = gdjs.base_32sceneCode.GDLizardFemaleObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].getBehavior("Health").Hit(40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.base_32sceneCode.GDMoustacheObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDMoustacheObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.base_32sceneCode.GDBeardObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDBeardObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.base_32sceneCode.GDHairObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDHairObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LizardFemale"), gdjs.base_32sceneCode.GDLizardFemaleObjects1);

gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDLizardFemaleObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDLizardFemaleObjects1[k] = gdjs.base_32sceneCode.GDLizardFemaleObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDLizardFemaleObjects1.length = k;}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over bad", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Beard"), gdjs.base_32sceneCode.GDBeardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hair"), gdjs.base_32sceneCode.GDHairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Moustache"), gdjs.base_32sceneCode.GDMoustacheObjects1);

gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDMoustacheObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDMoustacheObjects1[i].getX() > 8 ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDMoustacheObjects1[k] = gdjs.base_32sceneCode.GDMoustacheObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDMoustacheObjects1.length = k;for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDBeardObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDBeardObjects1[i].getX() > 8 ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDBeardObjects1[k] = gdjs.base_32sceneCode.GDBeardObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDBeardObjects1.length = k;for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDHairObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDHairObjects1[i].getX() > 8 ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDHairObjects1[k] = gdjs.base_32sceneCode.GDHairObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDHairObjects1.length = k;}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.base_32sceneCode.GDBeardObjects1 */
/* Reuse gdjs.base_32sceneCode.GDHairObjects1 */
/* Reuse gdjs.base_32sceneCode.GDMoustacheObjects1 */
{for(var i = 0, len = gdjs.base_32sceneCode.GDMoustacheObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDMoustacheObjects1[i].addPolarForce(180, 200, 0);
}
for(var i = 0, len = gdjs.base_32sceneCode.GDBeardObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDBeardObjects1[i].addPolarForce(180, 200, 0);
}
for(var i = 0, len = gdjs.base_32sceneCode.GDHairObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDHairObjects1[i].addPolarForce(180, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Beard"), gdjs.base_32sceneCode.GDBeardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hair"), gdjs.base_32sceneCode.GDHairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Moustache"), gdjs.base_32sceneCode.GDMoustacheObjects1);

gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDMoustacheObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDMoustacheObjects1[i].getX() <= 8 ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDMoustacheObjects1[k] = gdjs.base_32sceneCode.GDMoustacheObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDMoustacheObjects1.length = k;for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDBeardObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDBeardObjects1[i].getX() <= 8 ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDBeardObjects1[k] = gdjs.base_32sceneCode.GDBeardObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDBeardObjects1.length = k;for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDHairObjects1.length;i<l;++i) {
    if ( gdjs.base_32sceneCode.GDHairObjects1[i].getX() <= 8 ) {
        gdjs.base_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDHairObjects1[k] = gdjs.base_32sceneCode.GDHairObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDHairObjects1.length = k;}if (gdjs.base_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.base_32sceneCode.GDBeardObjects1 */
/* Reuse gdjs.base_32sceneCode.GDHairObjects1 */
/* Reuse gdjs.base_32sceneCode.GDMoustacheObjects1 */
{for(var i = 0, len = gdjs.base_32sceneCode.GDMoustacheObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDMoustacheObjects1[i].setX(980);
}
for(var i = 0, len = gdjs.base_32sceneCode.GDBeardObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDBeardObjects1[i].setX(980);
}
for(var i = 0, len = gdjs.base_32sceneCode.GDHairObjects1.length ;i < len;++i) {
    gdjs.base_32sceneCode.GDHairObjects1[i].setX(980);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Beard"), gdjs.base_32sceneCode.GDBeardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hair"), gdjs.base_32sceneCode.GDHairObjects1);
gdjs.copyArray(runtimeScene.getObjects("LizardFemale"), gdjs.base_32sceneCode.GDLizardFemaleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Moustache"), gdjs.base_32sceneCode.GDMoustacheObjects1);

gdjs.base_32sceneCode.condition0IsTrue_0.val = false;
gdjs.base_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.base_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.base_32sceneCode.mapOfGDgdjs_46base_9532sceneCode_46GDMoustacheObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDBeardObjects1ObjectsGDgdjs_46base_9532sceneCode_46GDHairObjects1Objects) == 0;
}if ( gdjs.base_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.base_32sceneCode.GDLizardFemaleObjects1.length;i<l;++i) {
    if ( !(gdjs.base_32sceneCode.GDLizardFemaleObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.base_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.base_32sceneCode.GDLizardFemaleObjects1[k] = gdjs.base_32sceneCode.GDLizardFemaleObjects1[i];
        ++k;
    }
}
gdjs.base_32sceneCode.GDLizardFemaleObjects1.length = k;}}
if (gdjs.base_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over good", false);
}}

}


};

gdjs.base_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.base_32sceneCode.GDLizardFemaleObjects1.length = 0;
gdjs.base_32sceneCode.GDLizardFemaleObjects2.length = 0;
gdjs.base_32sceneCode.GDBlueLaser14Objects1.length = 0;
gdjs.base_32sceneCode.GDBlueLaser14Objects2.length = 0;
gdjs.base_32sceneCode.GDPinkBackgroundObjects1.length = 0;
gdjs.base_32sceneCode.GDPinkBackgroundObjects2.length = 0;
gdjs.base_32sceneCode.GDMoustacheObjects1.length = 0;
gdjs.base_32sceneCode.GDMoustacheObjects2.length = 0;
gdjs.base_32sceneCode.GDBeardObjects1.length = 0;
gdjs.base_32sceneCode.GDBeardObjects2.length = 0;
gdjs.base_32sceneCode.GDHairObjects1.length = 0;
gdjs.base_32sceneCode.GDHairObjects2.length = 0;

gdjs.base_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['base_32sceneCode'] = gdjs.base_32sceneCode;
