function initializeCopyFBox06ec3f27756384f() {
    CopyFBox06ec3f27756384f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "CopyFBox06ec3f27756384f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    CopyFBox06ec3f27756384f.setDefaultUnit(kony.flex.DP);
    var lblCatname = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblCatname",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0ac4eb43f8a9340",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
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
        "textCopyable": false
    });
    CopyFBox06ec3f27756384f.add(lblCatname);
}