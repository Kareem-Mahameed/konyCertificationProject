//Type your code here
function showProgress(message) {
    var flexProgress = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexProgress",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlex1",
        "top": "0dp",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    flexProgress.setDefaultUnit(kony.flex.DP);
    var lblMessage = new kony.ui.Label({
        "bottom": "0px",
        "id": "lblMessage",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblMsg",
        "text": message,
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexProgress.add(lblMessage);
    var currentForm = kony.application.getCurrentForm();
    currentForm.add(flexProgress);
}

function dismissProgress() {
    var currentForm = kony.application.getCurrentForm();
    if (currentForm.flexProgress) currentForm.remove(currentForm.flexProgress);
}