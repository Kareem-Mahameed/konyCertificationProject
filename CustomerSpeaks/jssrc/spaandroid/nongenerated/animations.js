//Type your code here
// setting Home Segment Animation
function setSegmentAnimation() {
    var transformObject1 = kony.ui.makeAffineTransform();
    var transformObject2 = kony.ui.makeAffineTransform();
    // 
    transformObject1.translate(200, 0);
    transformObject2.translate(0, 0);
    var animationObject = kony.ui.createAnimation({
        "0": {
            "transform": transformObject1,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "transform": transformObject2,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animationConfig = {
        duration: 1,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    var animationCallbacks = {
        "animationEnd": function() {
            kony.print("animation END");
        }
    };
    var animationDefObject = {
        definition: animationObject,
        config: animationConfig,
        callbacks: animationCallbacks
    };
    frmHome.sgmtCategories.setAnimations({
        visible: animationDefObject
    });
}
/// ********************* Search Flex Container animation
function animateSearchFlx() {
    frmHome.flxSearch.txtSearch.text = "";
    // show the search flex
    frmHome.flxSearch.setVisibility(true);
    // move flx
    function animationCallbacks() {
        kony.print("##### Search animation END");
    }
    frmHome.flxSearch.animate(kony.ui.createAnimation({
        "0": {
            "top": "0%",
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        },
        "100": {
            "top": "10%",
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": "1",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": animationCallbacks
    });
    frmHome.flxHomeSgmt.animate(kony.ui.createAnimation({
        "0": {
            "top": "10%",
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        },
        "100": {
            "top": "20%",
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": "1",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": animationCallbacks
    });
    frmHome.flxSearch.txtSearch.setFocus(true);
}
/// ********************* cancel Search Flex Container animation
function animateCancelSearchFlx() {
    // move flx
    function animationCallbacks() {
        frmHome.flxSearch.setVisibility(false);
        kony.print("#### cancel Search animation END");
    }
    frmHome.flxSearch.animate(kony.ui.createAnimation({
        "0": {
            "top": "10%",
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        },
        "100": {
            "top": "0%",
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": "1",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": animationCallbacks
    });
    // hide the search flex
    //frmHome.flxSearch.setVisibility(false);
    frmHome.flxHomeSgmt.animate(kony.ui.createAnimation({
        "0": {
            "top": "20%",
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        },
        "100": {
            "top": "10%",
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": "1",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": animationCallbacks
    });
}
//  *******************************		setProductSgmtAnimation 	************** 
function setProductSgmtAnimation() {
    var scaleTransform1 = kony.ui.makeAffineTransform();
    var scaleTransform2 = kony.ui.makeAffineTransform();
    scaleTransform1.scale(0.1, 0.1);
    scaleTransform2.scale(1, 1);
    var animationObject = kony.ui.createAnimation({
        "0": {
            "transform": scaleTransform1,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "transform": scaleTransform2,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animationConfig = {
        duration: 1,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    var animationCallbacks = {
        "animationEnd": function() {}
    };
    var animationDefObject = {
        definition: animationObject,
        config: animationConfig,
        callbacks: animationCallbacks
    };
    frmProductList.sgmtProducts.setAnimations({
        visible: animationDefObject
    });
}
/*
//  *******************************		lblPageRotation3D1 	************** 

function lblPageRotation3D1()
{
  var transformObject= kony.ui.makeAffineTransform(); 
	transformObject.setPerspective(500); 
	transformObject.rotate3D(90,0,1,0);
	var animationObject = kony.ui.createAnimation( {
    //"0":{"left":"0dp","top":"0dp","stepConfig":{"timingFunction":kony.anim.LINEAR}}, 
	"100":{"anchorPoint": {"x": 0.5,"y": 0.5},"transform":transformObject,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
	
  	var animationConfig = {duration:0.5,fillMode: kony.anim.FILL_MODE_FORWARDS};
  
	var animationCallbacks ={"animationEnd":lblPageRotation3D2()};//function(){kony.print("##### 3D animation END");}};
  
	frmProductList.lblPage.animate(animationObject , animationConfig, animationCallbacks);
}

//  *******************************		lblPageRotation3D2 	************** 

function lblPageRotation3D2()
{
  	kony.print("##### lblPageRotation3D2 animation START");
    frmProductList.lblPage.text=frmProductList.lblPage.text+"2";
  	var transformObject= kony.ui.makeAffineTransform(); 
	transformObject.setPerspective(500); 
	transformObject.rotate3D(180,0,1,0);
	var animationObject = kony.ui.createAnimation( {
    //"0":{"left":"0dp","top":"0dp","stepConfig":{"timingFunction":kony.anim.LINEAR}}, 
	"100":{"anchorPoint": {"x": 0.5,"y": 0.5},"transform":transformObject,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
	
  	var animationConfig = {duration:0.001,fillMode: kony.anim.FILL_MODE_FORWARDS};
  
	var animationCallbacks ={"animationEnd":lblPageRotation3D3()};//function(){kony.print("##### 3D animation END");}};
  
	frmProductList.lblPage.animate(animationObject , animationConfig, animationCallbacks);
}
//  *******************************		lblPageRotation3D3 	************** 

function lblPageRotation3D3()
{
  	kony.print("##### lblPageRotation3D3 animation START");
  	var transformObject= kony.ui.makeAffineTransform(); 
	transformObject.setPerspective(500); 
	transformObject.rotate3D(-90,0,1,0);
	var animationObject = kony.ui.createAnimation( {
    //"0":{"left":"0dp","top":"0dp","stepConfig":{"timingFunction":kony.anim.LINEAR}}, 
	"100":{"anchorPoint": {"x": 0.5,"y": 0.5},"transform":transformObject,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
	
  	var animationConfig = {duration:0.001,fillMode: kony.anim.FILL_MODE_FORWARDS};
  
	var animationCallbacks ={"animationEnd":lblPageRotation3D4()};//function(){kony.print("##### 3D animation END");}};
  
	frmProductList.lblPage.animate(animationObject , animationConfig, animationCallbacks);
}
//  *******************************		lblPageRotation3D4 	************** 

function lblPageRotation3D4()
{
    kony.print("##### lblPageRotation3D4 animation START");
    var transformObject= kony.ui.makeAffineTransform(); 
	transformObject.setPerspective(500); 
	transformObject.rotate3D(0,0,1,0);
	var animationObject = kony.ui.createAnimation( {
    //"0":{"left":"0dp","top":"0dp","stepConfig":{"timingFunction":kony.anim.LINEAR}}, 
	"100":{"anchorPoint": {"x": 0.5,"y": 0.5},"transform":transformObject,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
	
  	var animationConfig = {duration:0.5,fillMode: kony.anim.FILL_MODE_FORWARDS};
  
	var animationCallbacks ={"animationEnd":function(){kony.print("##### 3D lblPageRotation3D4 animation END");}};
  
	frmProductList.lblPage.animate(animationObject , animationConfig, animationCallbacks);
}
*/