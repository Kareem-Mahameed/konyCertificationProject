function initializeCopyFBox0c4c09b2a4e2d4c() {
    CopyFBox0c4c09b2a4e2d4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "CopyFBox0c4c09b2a4e2d4c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    CopyFBox0c4c09b2a4e2d4c.setDefaultUnit(kony.flex.DP);
    var lblCatname = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblCatname",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0ac4eb43f8a9340",
        "text": "Label",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyFBox0c4c09b2a4e2d4c.add(lblCatname);
}