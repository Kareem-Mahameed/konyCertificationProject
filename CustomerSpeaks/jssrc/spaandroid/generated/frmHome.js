function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxHome = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHome",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknHome",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHome.setDefaultUnit(kony.flex.DP);
    var flxHomeSgmt = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxHomeSgmt",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHomeSgmt.setDefaultUnit(kony.flex.DP);
    var lblBreadCrumb = new kony.ui.Label({
        "id": "lblBreadCrumb",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel07d0a70173cbd4e",
        "text": "Home",
        "top": "1%",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sgmtCategories = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }, {
            "lblCatname": "",
            "subCategoryID": ""
        }],
        "groupCells": false,
        "height": "85%",
        "id": "sgmtCategories",
        "isVisible": true,
        "left": "3%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_581eadcdbbd34e419f6ce4eea34ccba5,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "Copyseg0c25c4d3c06bf46",
        "rowSkin": "sknSeg",
        "rowTemplate": CopyFBox06ec3f27756384f,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "1%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblCatname": "lblCatname"
        },
        "width": "94%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHomeSgmt.add(lblBreadCrumb, sgmtCategories);
    var kme4d0888e21e46cbb81f8f46705e1f14 = new kony.ui.FlexContainer({
        "isMaster": true,
        "id": "flxHeader",
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
    kme4d0888e21e46cbb81f8f46705e1f14.setDefaultUnit(kony.flex.DP);
    var kmc6f24de50354345b9b5ca4dad35c567 = new kony.ui.Image2({
        "id": "imgLogo",
        "centerX": "50%",
        "centerY": "50%",
        "height": "60dp",
        "imageWhenFailed": "bestbuylogo.png",
        "isVisible": true,
        "left": "3dp",
        "skin": "slImageHeaderLogo",
        "src": "bestbuylogo.png",
        "top": "3dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km6cd35620dac4da3b32f44780d6df34b = new kony.ui.Label({
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
    var kmb945f27acd04cffa9384308617b59eb = new kony.ui.Image2({
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
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km4474363edeb4ebeb0418e27cd7869cf = new kony.ui.Image2({
        "id": "imgBack",
        "centerY": "50%",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_menu_back.png",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km3e307dfbe2f4e39b34c3e36b7fbb533 = new kony.ui.Button({
        "id": "btnSearch",
        "onClick": AS_Button_fa24b31a35494f27886b31dbd1532045,
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0a3c09283fbd34a",
        "height": "50dp",
        "isVisible": true,
        "right": "0%",
        "skin": "sknHeaderSearch",
        "text": "Search",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kma030bffbce34de98fdbd18a485880f4 = new kony.ui.Button({
        "id": "btnBestByLogo",
        "centerX": "50%",
        "centerY": "50%",
        "height": "60dp",
        "isVisible": true,
        "skin": "sknHeaderLogo",
        "width": "80dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmc8a30bb252f40518e5619c5f8fadac5 = new kony.ui.Button({
        "id": "btnBack",
        "onClick": AS_Button_f870f69ca40349a692bafa45e6c4b84b,
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0a3c09283fbd34a",
        "height": "50dp",
        "isVisible": true,
        "left": "0%",
        "skin": "sknHeaderBack",
        "text": "Back",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kme4d0888e21e46cbb81f8f46705e1f14.add(kmc6f24de50354345b9b5ca4dad35c567, km6cd35620dac4da3b32f44780d6df34b, kmb945f27acd04cffa9384308617b59eb, km4474363edeb4ebeb0418e27cd7869cf, km3e307dfbe2f4e39b34c3e36b7fbb533, kma030bffbce34de98fdbd18a485880f4, kmc8a30bb252f40518e5619c5f8fadac5);
    flxHome.add(flxHomeSgmt, kme4d0888e21e46cbb81f8f46705e1f14);
    var flxSearch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxSearch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox075c2ca7dfbdb40",
        "top": "-100%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxSearch.setDefaultUnit(kony.flex.DP);
    var txtSearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "60dp",
        "id": "txtSearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "onDone": AS_TextField_c39b0e3ac41f486a8fa825fa8d2602b1,
        "secureTextEntry": false,
        "skin": "CopyslTextBox0cd6c83ce15d345",
        "text": "Search",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var flxGray = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGray",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09d30e914fcff4d",
        "top": "70dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGray.setDefaultUnit(kony.flex.DP);
    flxGray.add();
    var btnCancel = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed07f677181a7f64f",
        "height": "60dp",
        "id": "btnCancel",
        "isVisible": true,
        "left": "75%",
        "onClick": AS_Button_2560429f4beb4c4797e04ec1174d68f3,
        "skin": "CopyslButtonGlossBlue0598ba3111a864b",
        "text": "Cancel",
        "top": "0%",
        "width": "85dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSearch.add(txtSearch, flxGray, btnCancel);
    frmHome.add(flxHome, flxSearch);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "init": AS_Form_785ead4a810548fa850df6ff8f485838,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_f080eca463fd45019d98b775c677cb8d,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    frmHome.info = {
        "kuid": "72decdf8079a4318a1140acd340c74e1"
    };
};