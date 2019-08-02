function initializetmpReviewRow() {
    flxReviewRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxReviewRow",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "CopyslFbox08ce91ad1264d4a"
    }, {}, {});
    flxReviewRow.setDefaultUnit(kony.flex.DP);
    var lblReviewTitle = new kony.ui.Label({
        "id": "lblReviewTitle",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel035db8006674b44",
        "text": "ReviewTitle",
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
    var lblReviewerName = new kony.ui.Label({
        "id": "lblReviewerName",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel035db8006674b44",
        "text": "Submitted By : Kareem Mahameed ",
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
    var imgRating = new kony.ui.Image2({
        "id": "imgRating",
        "isVisible": true,
        "left": "1%",
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
    var lblReviewContent = new kony.ui.Label({
        "id": "lblReviewContent",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel035db8006674b44",
        "text": "ReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetailReviewDetail",
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
    flxReviewRow.add(lblReviewTitle, lblReviewerName, imgRating, lblReviewContent);
}