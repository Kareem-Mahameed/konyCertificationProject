//Type your code here
// ####################################
function prevRotation() {
    function ROTATE_ACTION_3D____370362cd1ede4c67afa39d17e79eb1a4_Callback() {}

    function ROTATE_ACTION_3D____11a873b280514d8e9f5fc3636844e1db_Callback() {
        frmProductList.lblPage.text = "Page " + currentPage + " of " + totalPages;
        var trans100 = kony.ui.makeAffineTransform();
        trans100.rotate3D(0, 0, 1, 0);
        trans100.setPerspective(500);
        frmProductList.lblPage.animate(kony.ui.createAnimation({
            "100": {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": ROTATE_ACTION_3D____370362cd1ede4c67afa39d17e79eb1a4_Callback
        });
    }
    /*
      function ROTATE_ACTION_3D____a853a94d1ba64f18b774a5c970d3de5d_Callback() {
          var trans100 = kony.ui.makeAffineTransform();
          trans100.rotate3D(-90, 0, 1, 0);
          trans100.setPerspective(500);
          frmProductList.lblPage.animate(
          kony.ui.createAnimation({
              "100": {
                  "anchorPoint": {
                      "x": 0.5,
                      "y": 0.5
                  },
                  "stepConfig": {
                      "timingFunction": kony.anim.EASE
                  },
                  "transform": trans100
              }
          }), {
              "delay": 0,
              "iterationCount": "1",
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.001
          }, {
              "animationEnd": ROTATE_ACTION_3D____11a873b280514d8e9f5fc3636844e1db_Callback
          });
      }
      function ROTATE_ACTION_3D____b3845b931d7a47f6824a14713ae137b2_Callback() {
          frmProductList.lblPage.text =frmProductList.lblPage.text + "2";
          var trans100 = kony.ui.makeAffineTransform();
          trans100.rotate3D(180, 0, 1, 0);
          trans100.setPerspective(500);
          frmProductList.lblPage.animate(
          kony.ui.createAnimation({
              "100": {
                  "anchorPoint": {
                      "x": 0.5,
                      "y": 0.5
                  },
                  "stepConfig": {
                      "timingFunction": kony.anim.EASE
                  },
                  "transform": trans100
              }
          }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.001
          }, {
              "animationEnd": ROTATE_ACTION_3D____a853a94d1ba64f18b774a5c970d3de5d_Callback
          });
      }
    */
    var trans100 = kony.ui.makeAffineTransform();
    trans100.rotate3D(90, 0, 1, 0);
    trans100.setPerspective(500);
    frmProductList.lblPage.animate(kony.ui.createAnimation({
        "100": {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": "1",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": ROTATE_ACTION_3D____11a873b280514d8e9f5fc3636844e1db_Callback
    });
}