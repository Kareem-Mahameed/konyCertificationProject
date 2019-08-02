function addWidgetsfrmProductDetails() {
    frmProductDetails.setDefaultUnit(kony.flex.DP);
    var flxProductDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxProductDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknHome",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProductDetails.setDefaultUnit(kony.flex.DP);
    var flxDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxDetails",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetails.setDefaultUnit(kony.flex.DP);
    var flxProduct = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxProduct",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProduct.setDefaultUnit(kony.flex.DP);
    var flxProductName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxProductName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProductName.setDefaultUnit(kony.flex.DP);
    var imgProductImage = new kony.ui.Image2({
        "id": "imgProductImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "bestbuylogo.png",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxText = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxText",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "40%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "59%",
        "zIndex": 1
    }, {}, {});
    flxText.setDefaultUnit(kony.flex.DP);
    var lblProductName = new kony.ui.Label({
        "id": "lblProductName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04024e1ffb08841",
        "text": "ProductName",
        "top": "0dp",
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
    var lblPrice = new kony.ui.Label({
        "id": "lblPrice",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel08bcc565a10d846",
        "text": "Price",
        "top": "0dp",
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
    var lblRating = new kony.ui.Label({
        "id": "lblRating",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel008cb1d5832d045",
        "text": "Avg User Rating :",
        "top": "0dp",
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
    var imgProductRating = new kony.ui.Image2({
        "id": "imgProductRating",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ratings_star_4.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxText.add(lblProductName, lblPrice, lblRating, imgProductRating);
    var btnMore = new kony.ui.Button({
        "bottom": "10dp",
        "height": "30dp",
        "id": "btnMore",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslButtonGlossBlue0c0faa3e7c48e47",
        "text": "more...",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxProductName.add(imgProductImage, flxText, btnMore);
    var lblProductDescription = new kony.ui.Label({
        "id": "lblProductDescription",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel0fbc9242e1b0d40",
        "text": "product description product description product description ",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblLine = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel09b67c56cdfd045",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblReviewsNo = new kony.ui.Label({
        "id": "lblReviewsNo",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel0fbc9242e1b0d40",
        "text": "Number Of Reviews : ",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxProduct.add(flxProductName, lblProductDescription, lblLine, lblReviewsNo);
    var sgmtReview = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }, {
            "imgRating": "ratings_star_4.png",
            "lblReviewContent": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
            "lblReviewTitle": "ReviewTitle",
            "lblReviewerName": "Submitted By : Kareem Mahameed "
        }],
        "groupCells": false,
        "height": "90%",
        "id": "sgmtReview",
        "isVisible": true,
        "left": "1%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "sknSeg",
        "rowTemplate": flxReviewRow,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "1%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxReviewRow": "flxReviewRow",
            "imgRating": "imgRating",
            "lblReviewContent": "lblReviewContent",
            "lblReviewTitle": "lblReviewTitle",
            "lblReviewerName": "lblReviewerName"
        },
        "width": "98%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetails.add(flxProduct, sgmtReview);
    var km300668e7ce54205ac308115d3422dc5 = new kony.ui.FlexContainer({
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
    km300668e7ce54205ac308115d3422dc5.setDefaultUnit(kony.flex.DP);
    var kmcbd7f08ee564826b5335e04b8abfb33 = new kony.ui.Image2({
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
    var kmccba62d32cf4abb9ab0efcba6987023 = new kony.ui.Label({
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
    var km787ad1febb1456da37842fc2f0d60e0 = new kony.ui.Image2({
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
    var km06c8236f9544fa2bb2f469d0c3f8ab8 = new kony.ui.Image2({
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
    var km7fa02256eea4bb1ad82e8d09acdacb4 = new kony.ui.Button({
        "id": "btnSearch",
        "onClick": AS_Button_2c06fdd925ca43a1bbc84318bd200490,
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
    var km21b3e4d55dc46fc85d3400dbe2ca603 = new kony.ui.Button({
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
    var km27bdda9b597446cb4cb4bb92d26bf60 = new kony.ui.Button({
        "id": "btnBack",
        "onClick": AS_Button_998db075601c4fbbb140155f87338b95,
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
    km300668e7ce54205ac308115d3422dc5.add(kmcbd7f08ee564826b5335e04b8abfb33, kmccba62d32cf4abb9ab0efcba6987023, km787ad1febb1456da37842fc2f0d60e0, km06c8236f9544fa2bb2f469d0c3f8ab8, km7fa02256eea4bb1ad82e8d09acdacb4, km21b3e4d55dc46fc85d3400dbe2ca603, km27bdda9b597446cb4cb4bb92d26bf60);
    flxProductDetails.add(flxDetails, km300668e7ce54205ac308115d3422dc5);
    frmProductDetails.add(flxProductDetails);
};

function frmProductDetailsGlobals() {
    frmProductDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProductDetails,
        "enabledForIdleTimeout": false,
        "id": "frmProductDetails",
        "init": AS_Form_d8734874faf44250b327551beacd6bd3,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    frmProductDetails.info = {
        "kuid": "927768dc622c439f94af6d1792bb7a4d"
    };
};