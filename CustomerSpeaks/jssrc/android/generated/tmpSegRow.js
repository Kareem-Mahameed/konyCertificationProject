function initializetmpSegRow() {
    flxSegRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "120dp",
        "id": "flxSegRow",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0c12edff32bcb4f"
    }, {}, {});
    flxSegRow.setDefaultUnit(kony.flex.DP);
    var imgRowThumb = new kony.ui.Image2({
        "height": "100%",
        "id": "imgRowThumb",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "foxlogo.png",
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxRowText = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxRowText",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    flxRowText.setDefaultUnit(kony.flex.DP);
    var lblProductName = new kony.ui.Label({
        "id": "lblProductName",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel09e25b7e7c6a443",
        "text": "Product Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPrice = new kony.ui.Label({
        "id": "lblPrice",
        "isVisible": true,
        "left": "0%",
        "skin": "sknPrice",
        "text": "Price",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblRating = new kony.ui.Label({
        "id": "lblRating",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0a409956adf3843",
        "text": "Avg User Rating :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxRowText.add(lblProductName, lblPrice, lblRating);
    flxSegRow.add(imgRowThumb, flxRowText);
}