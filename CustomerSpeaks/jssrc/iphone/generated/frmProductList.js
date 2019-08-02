function addWidgetsfrmProductList() {
    frmProductList.setDefaultUnit(kony.flex.DP);
    var flxProductsList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxProductsList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknHome",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProductsList.setDefaultUnit(kony.flex.DP);
    var kme6d5bfa511e442f9eec8ea210137227 = new kony.ui.FlexContainer({
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
    kme6d5bfa511e442f9eec8ea210137227.setDefaultUnit(kony.flex.DP);
    var km7e4fca5ed174c3b8024d059c42cdbf9 = new kony.ui.Image2({
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
    var km738040a47234f7ba05a552394597de1 = new kony.ui.Label({
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var kmb21f77284ed48c38ffb8d10957992fd = new kony.ui.Image2({
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
    var kmc970f61872640cb99bf5531b69e54ba = new kony.ui.Image2({
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
    var kmbd96845c6dc48d18666e160ac1cd02c = new kony.ui.Button({
        "id": "btnSearch",
        "onClick": AS_Button_18d55060b91448039676be93dde17f06,
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
    }, {
        "showProgressIndicator": true
    });
    var km4ced5b69ce84a1a81ed520bec13d4df = new kony.ui.Button({
        "id": "btnBack",
        "onClick": AS_Button_9668133c060a498fb3495683645d31b8,
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
    }, {
        "showProgressIndicator": true
    });
    kme6d5bfa511e442f9eec8ea210137227.add(km7e4fca5ed174c3b8024d059c42cdbf9, km738040a47234f7ba05a552394597de1, kmb21f77284ed48c38ffb8d10957992fd, kmc970f61872640cb99bf5531b69e54ba, kmbd96845c6dc48d18666e160ac1cd02c, km4ced5b69ce84a1a81ed520bec13d4df);
    var lblBreadCrumb = new kony.ui.Label({
        "height": "50dp",
        "id": "lblBreadCrumb",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel07d0a70173cbd4e",
        "text": "Home",
        "top": "11%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var sgmtProducts = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgRowThumb": "foxlogo.png",
            "lblPrice": "Price",
            "lblProductName": "Product Name",
            "lblRating": "Avg User Rating :"
        }, {
            "imgRowThumb": "foxlogo.png",
            "lblPrice": "Price",
            "lblProductName": "Product Name",
            "lblRating": "Avg User Rating :"
        }, {
            "imgRowThumb": "foxlogo.png",
            "lblPrice": "Price",
            "lblProductName": "Product Name",
            "lblRating": "Avg User Rating :"
        }, {
            "imgRowThumb": "foxlogo.png",
            "lblPrice": "Price",
            "lblProductName": "Product Name",
            "lblRating": "Avg User Rating :"
        }, {
            "imgRowThumb": "foxlogo.png",
            "lblPrice": "Price",
            "lblProductName": "Product Name",
            "lblRating": "Avg User Rating :"
        }, {
            "imgRowThumb": "foxlogo.png",
            "lblPrice": "Price",
            "lblProductName": "Product Name",
            "lblRating": "Avg User Rating :"
        }],
        "groupCells": false,
        "height": "70%",
        "id": "sgmtProducts",
        "isVisible": true,
        "left": "3%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_e59a94edd0b14f04af183b71c935be2d,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "Copyseg0c25c4d3c06bf46",
        "rowSkin": "sknSeg",
        "rowTemplate": flxSegRow,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "19%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxRowText": "flxRowText",
            "flxSegRow": "flxSegRow",
            "imgRowThumb": "imgRowThumb",
            "lblPrice": "lblPrice",
            "lblProductName": "lblProductName",
            "lblRating": "lblRating"
        },
        "width": "94%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    var btnPrev = new kony.ui.Button({
        "bottom": "2%",
        "height": "45dp",
        "id": "btnPrev",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_1b115dde11a04abe9669a8cedccce611,
        "skin": "sknBtnPage",
        "text": "<< Prev",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnNext = new kony.ui.Button({
        "bottom": "2%",
        "height": "45dp",
        "id": "btnNext",
        "isVisible": true,
        "onClick": AS_Button_c3a79765575e4540b32965d0489f7d43,
        "right": "1%",
        "skin": "sknBtnPage",
        "text": "Next >>",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblPage = new kony.ui.Label({
        "bottom": "4%",
        "centerX": "50%",
        "id": "lblPage",
        "isVisible": true,
        "skin": "CopyslLabel0496135e0bf8142",
        "text": "Page 1 of 1",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxProductsList.add(kme6d5bfa511e442f9eec8ea210137227, lblBreadCrumb, sgmtProducts, btnPrev, btnNext, lblPage);
    frmProductList.add(flxProductsList);
};

function frmProductListGlobals() {
    frmProductList = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProductList,
        "enabledForIdleTimeout": false,
        "id": "frmProductList",
        "init": AS_Form_e75d66adbe05412c951a32f89248f429,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_4a4470de73494ab5b8d870bb55a7073c,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    frmProductList.info = {
        "kuid": "ccd7dcdaae344e399a4c10e9726731e1"
    };
};