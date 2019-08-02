function addWidgetsfrmTestImages() {
    frmTestImages.setDefaultUnit(kony.flex.DP);
    var flxtestImages = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxtestImages",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxtestImages.setDefaultUnit(kony.flex.DP);
    var km79a716f1dc24cc8be45c6f52e142e6c = new kony.ui.FlexContainer({
        "isMaster": true,
        "id": "flxHeader2",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknHeader",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    km79a716f1dc24cc8be45c6f52e142e6c.setDefaultUnit(kony.flex.DP);
    var kmeb077f51a424c2e9cb0468dcf0b88e3 = new kony.ui.Image2({
        "id": "imgLogo",
        "centerX": "50%",
        "centerY": "50%",
        "height": "60dp",
        "isVisible": true,
        "left": "3dp",
        "skin": "slImage00c0d70aaeafd4a",
        "src": "bestbuylogo.png",
        "top": "3dp",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmaedc11e62174e1ea694a520a9caf3c1 = new kony.ui.Label({
        "id": "lblLine",
        "bottom": "0%",
        "height": "1%",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblWhiteBg0f67bff1b8f3043",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var km6d71c17db32416fae8b510383457cc4 = new kony.ui.Image2({
        "id": "imgSearch",
        "centerY": "50%",
        "height": "50dp",
        "isVisible": true,
        "right": "0%",
        "skin": "slImage",
        "src": "ic_menu_search.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km000820a12944173ab734f257ca9c134 = new kony.ui.Image2({
        "id": "imgBack",
        "centerY": "50%",
        "height": "50dp",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_menu_back.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmf10793703be4cb292fc88cb5b816494 = new kony.ui.Button({
        "id": "btnSearch",
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0a3c09283fbd34a",
        "height": "50dp",
        "isVisible": true,
        "onClick": AS_Button_4514dbb2526b49389abc4b5d5be0cbd6,
        "right": "0%",
        "skin": "sknHeaderSearchNoBackground",
        "text": "Search",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kma8c30016f64467eaca03bf59613e1e3 = new kony.ui.Button({
        "id": "btnBack",
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0a3c09283fbd34a",
        "height": "50dp",
        "isVisible": true,
        "left": "0%",
        "skin": "sknHeaderBackNoBackground",
        "text": "Back",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km79a716f1dc24cc8be45c6f52e142e6c.add(kmeb077f51a424c2e9cb0468dcf0b88e3, kmaedc11e62174e1ea694a520a9caf3c1, km6d71c17db32416fae8b510383457cc4, km000820a12944173ab734f257ca9c134, kmf10793703be4cb292fc88cb5b816494, kma8c30016f64467eaca03bf59613e1e3);
    flxtestImages.add(km79a716f1dc24cc8be45c6f52e142e6c);
    frmTestImages.add(flxtestImages);
};

function frmTestImagesGlobals() {
    frmTestImages = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTestImages,
        "enabledForIdleTimeout": false,
        "id": "frmTestImages",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    frmTestImages.info = {
        "kuid": "88ec6a5b7d6241fca9c6afba05f21dc4"
    };
};