//////////	mobileFabricConfiguration *************************************************************************
mobileFabricConfiguration = {
    appKey: "3a44834b16b83ac72dd83ccac784d566",
    appSecret: "d07ebec775db6cac1cf88a94b9a57757",
    serviceURL: "http://kareemkony.local:7777/authService/100000002/appconfig",
    bestByAPIKey: "sdjvqsgy8dufawzjpgssz6ns",
    // ##### Kony dev server
    //appKey:"3a44834b16b83ac72dd83ccac784d566",
    //appSecret:"d07ebec775db6cac1cf88a94b9a57757",
    //serviceURL:"https://bankalbilad.konylabs.net/authService/100000002/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "customerSpeakesServices",
        operations: ["getCategories", "getCatProducts", "getSearchProducts", "getProductDetails", "getProductReviews"]
    }],
    identityServices: [{
        service: "userstore",
        //username:"abdulkareem.mahameed@kony.com",
        //password: "****"
    }],
    konysdkObject: null,
    authClient: null,
    integrationObj: null,
    isKonySDKObjectInitialized: false,
    isMFAuthenticated: false
};
//////////	initializeMobileFabric in app init*************************************************************************
function initializeMobileFabricInAppInit() {
    kony.print(" ########## Entering into initializeMobileFabricInAppInit ########## ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Initializing the app !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.konysdkObject = new kony.sdk();
        mobileFabricConfiguration.konysdkObject.init(mobileFabricConfiguration.appKey, mobileFabricConfiguration.appSecret, mobileFabricConfiguration.serviceURL, initializeMobileFabricInAppInitSuccess, initializeMobileFabricFailure);
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ########## Exiting out of initializeMobileFabricInAppInit ########## ");
}

function initializeMobileFabricInAppInitSuccess(response) {
    kony.print(" ########## Entering into initializeMobileFabricInAppInitSuccess ########## ");
    kony.print(" ########## Success initializeMobileFabricInAppInitSuccess response : " + JSON.stringify(response) + " ########## ");
    mobileFabricConfiguration.isKonySDKObjectInitialized = true;
    kony.print(" ########## initializeMobileFabricInAppInitSuccess mobileFabricConfiguration.isKonySDKObjectInitialized : " + mobileFabricConfiguration.isKonySDKObjectInitialized);
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getCategories("cat00000");
    kony.print(" ########## Exiting out of initializeMobileFabricInAppInitSuccess ########## ");
}
//////////	initializeMobileFabric from any service call *************************************************************************
function initializeMobileFabric(callerFunction, params) {
    var initializeMobileFabricSuccess = function(response) {
        kony.print(" ########## Entering into initializeMobileFabricSuccess ########## ");
        kony.print(" ########## Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ########## ");
        mobileFabricConfiguration.isKonySDKObjectInitialized = true;
        kony.application.dismissLoadingScreen();
        //authenticateMFUsingUserStore();
        callerFunction(params);
        kony.print(" ########## Exiting out of initializeMobileFabricSuccess ########## ");
    };
    kony.print(" ########## Entering into initializeMobileFabric ########## ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Initializing the app !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.konysdkObject = new kony.sdk();
        mobileFabricConfiguration.konysdkObject.init(mobileFabricConfiguration.appKey, mobileFabricConfiguration.appSecret, mobileFabricConfiguration.serviceURL, initializeMobileFabricSuccess, initializeMobileFabricFailure);
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ########## Exiting out of initializeMobileFabric ########## ");
}
/*
function initializeMobileFabricSuccess(response)
{
	kony.print (" ########## Entering into initializeMobileFabricSuccess ########## ");
	kony.print (" ########## Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ########## ");
	mobileFabricConfiguration.isKonySDKObjectInitialized=true;
	kony.application.dismissLoadingScreen();
	//authenticateMFUsingUserStore();
  	var operationName = mobileFabricConfiguration.integrationServices[0].operations[0];
     var inputParams={"key":mobileFabricConfiguration.bestByAPIKey,"categoryID":"cat00000"};
  	getServiceResponse(operationName,inputParams,"getting Best By Categories from initializeMobileFabricSuccess",getCategoriesSuccessCallback);
	
  kony.print (" ########## Exiting out of initializeMobileFabricSuccess ########## ");
}
*/
function initializeMobileFabricFailure(error) {
    kony.print(" ########## Entering into initializeMobileFabricFailure ########## ");
    kony.print(" ########## Failure in initializeMobileFabric: " + JSON.stringify(error) + " ########## ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
    kony.print(" ########## Exiting out of initializeMobileFabricFailure ########## ");
}
//////////	authenticateMFUsingUserStore **************************************************************
function authenticateMFUsingUserStore() {
    kony.print(" ########## Entering into authenticateMFUsingUserStore ########## ");
    kony.application.showLoadingScreen("loadskin", "Fetching Data !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "ffffff77"
    });
    mobileFabricConfiguration.authClient = mobileFabricConfiguration.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfiguration.identityServices[0].username,
        "password": mobileFabricConfiguration.identityServices[0].password
    };
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ########## Exiting out of authenticateMFUsingUserStore ########## ");
}

function loginMFSuccess(response) {
    kony.print(" ********** Entering into loginMFSuccess ********** ");
    kony.print(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfiguration.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    //getNewsArticles();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}
//////////	getServiceResponse *************************************************************************
function getServiceResponse(operationName, inputParams, progressMessage, SuccessCallback) {
    kony.print(" ########## Entering into getServiceResponse ########## ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Fetching Data !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
        var headers = {};
        showProgress(progressMessage);
        mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, inputParams, SuccessCallback, getServiceResponseErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ########## Exiting getServiceResponse ########## ");
}

function getServiceResponseErrorCallback(error) {
    dismissProgress();
    kony.print(" ########## Entering into getServiceResponseErrorCallback ########## ");
    kony.print(" ########## Failure in getServiceResponseErrorCallback: " + JSON.stringify(error) + " ########## ");
    kony.application.dismissLoadingScreen();
    alert(" Failed to fetch data. Please try again. ");
    kony.print(" ########## Exiting out of getServiceResponseErrorCallback ########## ");
}
//////////	invoke getCategories Service call *************************************************************************
function getCategories(selectedCatID) {
    //var selectedCatID = "cat00000";
    kony.print("########## Selected Key:" + selectedCatID);
    // Let's first check that the user picked a valid value
    if (!kony.string.equalsIgnoreCase(selectedCatID, "none")) {
        // Populating the input params for the service call and invoking the service
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[0];
        var inputParams = {
            "key": mobileFabricConfiguration.bestByAPIKey,
            "categoryID": selectedCatID
        };
        //if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //	inputParams= {"newsType": selectedKey};
        // }else{
        //	// The user didn't pick a value so we'll show the alert
        //    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Categories",yesLabel:"OK"}, {});
        // }
        if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
            initializeMobileFabric(getCategories, selectedCatID);
        } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
            getServiceResponse(operationName, inputParams, "getting Best By Categories", getCategoriesSuccessCallback);
        }
    } else {
        // The user didn't pick a value so we'll show the alert
        kony.ui.Alert({
            message: "Please select a valid cat type",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Categories",
            yesLabel: "OK"
        }, {});
    }
}

function getCategoriesSuccessCallback(getCategoriesResponse) {
    dismissProgress();
    // Check the opstatus for 0 meaning it worked
    if (getCategoriesResponse !== null && getCategoriesResponse.opstatus === 0) {
        // Checking to make sure we DO have results
        kony.print("########## Response received from service call: " + JSON.stringify(getCategoriesResponse));
        if (getCategoriesResponse.categoryID !== "" && getCategoriesResponse.subCategories !== null && getCategoriesResponse.subCategories !== "") {
            if (getCategoriesResponse.subCategories.length > 0) {
                if (getCategoriesResponse.categoryID == "cat00000") {
                    frmHome.lblBreadCrumb.text = "Home";
                } else {
                    frmHome.lblBreadCrumb.text = frmHome.lblBreadCrumb.text + "->" + getCategoriesResponse.categoryName;
                }
                frmHome.sgmtCategories.widgetDataMap = {
                    catId: "subCategoryID",
                    lblCatname: "subCategoryName"
                };
                frmHome.sgmtCategories.setData(getCategoriesResponse.subCategories);
                frmHome.sgmtCategories.setVisibility(true);
                //frmHome.show();
            } else {
                categoriesStack.pop();
                //kony.ui.Alert({ message: "Empty Sub Categories: "+getCategoriesResponse.subCategories,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Sub Categories",yesLabel:"OK"}, {}); 
                // call getCatProducts
                frmProductList.lblBreadCrumb.text = "Category : " + getCategoriesResponse.categoryName;
                frmProductList.sgmtProducts.setVisibility(false);
                frmProductList.lblPage.text = "";
                frmProductList.flxProductsList.btnNext.setVisibility(false);
                frmProductList.flxProductsList.btnPrev.setVisibility(false);
                //frmProductList.show();
                catProductsParams.categoryID = getCategoriesResponse.categoryID;
                catProductsParams.categoryName = getCategoriesResponse.categoryName;
                catProductsParams.pageNo = 1;
                //catProductsParams={"categoryID":getCategoriesResponse.categoryID,"categoryName":getCategoriesResponse.categoryName,"pageNo":1};
                getCatProducts(catProductsParams);
            }
        } else {
            categoriesStack.pop();
            kony.ui.Alert({
                message: "error in calling the service ",
                alertType: constants.ALERT_TYPE_ERROR,
                alertTitle: "Sub Categories",
                yesLabel: "OK"
            }, {});
        }
        kony.application.dismissLoadingScreen();
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + getCategoriesResponse.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Categories List",
            yesLabel: "OK"
        }, {});
    }
}
//////////	 *************************************************************************
// This function get su bcategories list and displays the selected segment Record information
function getSubCategory() {
    // save the data to the categoriesStack to use it at back bottun
    categoriesStack.push({
        breadCrumb: frmHome.lblBreadCrumb.text,
        categories: frmHome.sgmtCategories.data
    });
    kony.print("########## sgmtCategories: " + JSON.stringify(frmHome.sgmtCategories.data));
    kony.print("########## categoriesStack: " + JSON.stringify(categoriesStack));
    // ######### getting the segment row based on channel
    var selData;
    // ######		ALL SPA CHANNELS
    selData = frmHome.sgmtCategories.selectedItems[0];
    //var selData = frmHome.sgmtCategories.selectedRowItems[0];
    kony.print("########## Selected Row Details: " + JSON.stringify(selData));
    //Setting the title
    var selectedCatID = selData.subCategoryID;
    getCategories(selectedCatID);
    // enable back bottun
    frmHome.flxHeader.btnBack.setVisibility(true);
    frmHome.flxHeader.imgBack.setVisibility(true);
    //frmNewsDetails.lblTitle.text = selData.title;
    //Setting the pubDate
    // Finding out the location of the first instance of first Image tag
    //var imgTagLocation = selData.desc.search("<img");
    //Trimming the data till imgTagLocation and setting the description
}
////////		***************************************************************************
//////////	invoke getCatProducts Service call *************************************************************************
function getCatProducts(category) {
    kony.print("########## Selected category:" + JSON.stringify(category));
    // Let's first check that the user picked a valid value
    if (!kony.string.equalsIgnoreCase(category.categoryID, "none")) {
        // Populating the input params for the service call and invoking the service
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[1];
        var inputParams = {
            "key": mobileFabricConfiguration.bestByAPIKey,
            "categoryID": category.categoryID,
            "pageNo": category.pageNo
        };
        if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
            initializeMobileFabric(getCatProducts, category);
        } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
            getServiceResponse(operationName, inputParams, "getting Category Products", getCatProductsSuccessCallback);
        }
    } else {
        // The user didn't pick a value so we'll show the alert
        kony.ui.Alert({
            message: "Please select a valid cat ",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Categories",
            yesLabel: "OK"
        }, {});
    }
}
//////////	invoke getSearchProducts Service call *************************************************************************
function getSearchProducts(searchRecord) {
    kony.print("########## Selected searchRecord:" + JSON.stringify(searchRecord));
    // Let's first check that the user picked a valid value
    if (!kony.string.equalsIgnoreCase(searchRecord.searchText, "none")) {
        // Populating the input params for the service call and invoking the service
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[2];
        var inputParams = {
            "key": mobileFabricConfiguration.bestByAPIKey,
            "searchText": searchRecord.searchText,
            "pageNo": searchRecord.pageNo
        };
        if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
            initializeMobileFabric(getSearchProducts, searchRecord);
        } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
            getServiceResponse(operationName, inputParams, "getting search Products result", getCatProductsSuccessCallback);
        }
    } else {
        // The user didn't pick a value so we'll show the alert
        kony.ui.Alert({
            message: "Please select a valid text ",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Categories",
            yesLabel: "OK"
        }, {});
    }
}
//////////	invoke getProducts Service call for both search and categories *************************************************************************
function getCatProductsSuccessCallback(getCatProductsResponse) {
    dismissProgress();
    // Check the opstatus for 0 meaning it worked
    if (getCatProductsResponse !== null && getCatProductsResponse.opstatus === 0) {
        // Checking to make sure we DO have results
        kony.print("########## Response received from service call: " + JSON.stringify(getCatProductsResponse));
        if (getCatProductsResponse.products !== null && getCatProductsResponse.products !== "") {
            if (getCatProductsResponse.products.length > 0) {
                currentPage = parseInt(getCatProductsResponse.currentPage);
                totalPages = parseInt(getCatProductsResponse.totalPages);
                frmProductList.lblPage.text = "Page " + getCatProductsResponse.currentPage + " of " + getCatProductsResponse.totalPages;
                frmProductList.sgmtProducts.widgetDataMap = {
                    productID: "productSKU",
                    lblProductName: "productName",
                    lblPrice: "regularPrice",
                    lblRating: "customerReviewAverage",
                    imgRowThumb: "mediumImage"
                };
                //***** checking onSales Price then sett the right template and add text "on slaes price"
                for (var i = 0; i < getCatProductsResponse.products.length; i++) {
                    if (getCatProductsResponse.products[i].onSale == "true") {
                        getCatProductsResponse.products[i].template = flxSegRowOnSaleWithBanner;
                        getCatProductsResponse.products[i].regularPrice = "Sale Price: $ " + getCatProductsResponse.products[i].salePrice;
                    } else {
                        getCatProductsResponse.products[i].regularPrice = "$ " + getCatProductsResponse.products[i].salePrice;
                    }
                    if (getCatProductsResponse.products[i].customerReviewAverage !== null && getCatProductsResponse.products[i].customerReviewAverage !== "") {
                        getCatProductsResponse.products[i].customerReviewAverage = "Avg User Rating: " + getCatProductsResponse.products[i].customerReviewAverage;
                    }
                }
                frmProductList.sgmtProducts.setData(getCatProductsResponse.products);
                // setting next and prev btn based on currentpage and totalpages
                if (getCatProductsResponse.totalPages > 1) {
                    if (getCatProductsResponse.currentPage == 1) {
                        frmProductList.flxProductsList.btnNext.setVisibility(true);
                        frmProductList.flxProductsList.btnPrev.setVisibility(false);
                    } else {
                        if (getCatProductsResponse.currentPage == getCatProductsResponse.totalPages) {
                            frmProductList.flxProductsList.btnNext.setVisibility(false);
                            frmProductList.flxProductsList.btnPrev.setVisibility(true);
                        } else {
                            frmProductList.flxProductsList.btnNext.setVisibility(true);
                            frmProductList.flxProductsList.btnPrev.setVisibility(true);
                        }
                    }
                } else {
                    frmProductList.flxProductsList.btnNext.setVisibility(false);
                    frmProductList.flxProductsList.btnPrev.setVisibility(false);
                }
                frmProductList.sgmtProducts.setVisibility(true);
                frmProductList.show();
            } else {
                kony.ui.Alert({
                    message: "Empty product list: " + getCatProductsResponse.products,
                    alertType: constants.ALERT_TYPE_ERROR,
                    alertTitle: "Empty Products List",
                    yesLabel: "OK"
                }, {});
                frmHome.show();
            }
        } else {
            categoriesStack.pop();
            kony.ui.Alert({
                message: "Empty product list",
                alertType: constants.ALERT_TYPE_ERROR,
                alertTitle: "Products List not available",
                yesLabel: "OK"
            }, {});
        }
        kony.application.dismissLoadingScreen();
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + getCatProductsResponse.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Products List",
            yesLabel: "OK"
        }, {});
    }
}
// ********** prodcuts Pagination 	**********************************************************************
function paginations(next) {
    kony.print("########## next param: " + next);
    // ##### get the breadCrumb text to determine its a category products list or search product list
    var breadCrumb = frmProductList.lblBreadCrumb.text;
    if (breadCrumb.charAt(0) == "C") // category products list
    {
        kony.print("########## catProductsParams before change: " + JSON.stringify(catProductsParams));
        if (next == "true") {
            currentPage = currentPage + 1;
            catProductsParams.pageNo = currentPage;
        } else {
            currentPage = currentPage - 1;
            catProductsParams.pageNo = currentPage;
        }
        kony.print("########## catProductsParams after change: " + JSON.stringify(catProductsParams));
        getCatProducts(catProductsParams);
        prevRotation();
    } else if (breadCrumb.charAt(0) == "R") // search product list
    {
        kony.print("########## searchRecord before change: " + JSON.stringify(searchRecord));
        if (next == "true") {
            currentPage = currentPage + 1;
            searchRecord.pageNo = currentPage;
        } else {
            currentPage = currentPage - 1;
            searchRecord.pageNo = currentPage;
        }
        kony.print("########## searchRecord after change: " + JSON.stringify(searchRecord));
        getSearchProducts(searchRecord);
        prevRotation();
    }
}
//// **********************		show search result		*******************************************************
function onDoneSearch() {
    //var searchRecord={"searchText":"","pageNo":1};
    searchRecord.searchText = frmHome.flxSearch.txtSearch.text;
    //searchRecord.searchText.length === 0 || !searchRecord.searchText.trim()
    // ##### checking empty string
    if (searchRecord.searchText !== "" && searchRecord.searchText !== null && searchRecord.searchText.trim().length > 0) {
        //var letters = /^[0-9a-zA-Z]+$/;
        // ##### checking for any invalid keyword
        var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/g;
        if (!regex.test(searchRecord.searchText)) {
            searchRecord.pageNo = 1;
            // call getSearchProducts
            frmProductList.lblBreadCrumb.text = "Results For : " + searchRecord.searchText;
            frmProductList.sgmtProducts.setVisibility(false);
            frmProductList.lblPage.text = "";
            frmProductList.flxProductsList.btnNext.setVisibility(false);
            frmProductList.flxProductsList.btnPrev.setVisibility(false);
            //frmProductList.show();
            //frmHome.flxSearch.setVisibility(false);
            animateCancelSearchFlx();
            getSearchProducts(searchRecord);
        } else {
            kony.ui.Alert({
                message: "Please search for valid keywords other than: !@#$%^&*()_+-=[]{};':\|,.<>?`~ ",
                alertType: constants.ALERT_TYPE_ERROR,
                alertTitle: "Products Search",
                yesLabel: "OK"
            }, {});
            frmHome.flxSearch.txtSearch.setFocus(true);
        }
    } else {
        kony.ui.Alert({
            message: "Please enter search keywords",
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Products Search",
            yesLabel: "OK"
        }, {});
        frmHome.flxSearch.txtSearch.setFocus(true);
    }
}
//// **********************		product Details		*******************************************************
function showProductDetails() {
    // ######### getting the segment row based on channel
    var productSelData;
    // ######		ALL SPA CHANNELS
    productSelData = frmProductList.sgmtProducts.selectedItems[0];
    //var selData = frmProductList.sgmtProducts.selectedRowItems[0];
    kony.print("########## Selected Row Details productSelData : " + simpleStringify(productSelData));
    // setting product details
    frmProductDetails.lblProductName.text = productSelData.productName;
    frmProductDetails.lblPrice.text = productSelData.regularPrice;
    frmProductDetails.lblProductDescription.text = productSelData.shortDescription;
    if (productSelData.customerReviewAverage !== null && productSelData.customerReviewAverage !== "") {
        var review = productSelData.customerReviewAverage.substring(17);
        frmProductDetails.lblRating.text = "Ave Review : " + review;
        var reviewNo = parseInt(review);
        kony.print("########## reviewNo: " + reviewNo);
        switch (reviewNo) {
            case 1:
                frmProductDetails.imgProductRating.src = "ratings_star_1.png";
                break;
            case 2:
                frmProductDetails.imgProductRating.src = "ratings_star_2.png";
                break;
            case 3:
                frmProductDetails.imgProductRating.src = "ratings_star_3.png";
                break;
            case 4:
                frmProductDetails.imgProductRating.src = "ratings_star_4.png";
                break;
            default:
                frmProductDetails.imgProductRating.src = "ratings_star_5.png";
        }
        frmProductDetails.imgProductRating.setVisibility(true);
    } else {
        frmProductDetails.lblRating.text = "";
        frmProductDetails.imgProductRating.setVisibility(false);
    }
    //frmProductDetails.lblRating.text=productSelData.customerReviewAverage;
    frmProductDetails.imgProductImage.src = productSelData.mediumImage;
    frmProductDetails.sgmtReview.setVisibility(false);
    frmProductDetails.lblReviewsNo.setVisibility(false);
    //frmProductDetails.show();
    getProductReviews(productSelData.productSKU);
}
//// **********************		product reviews		*******************************************************
function getProductReviews(productSKU) {
    kony.print("########## Selected productSKU:" + productSKU);
    // Let's first check that the user picked a valid value
    if (!kony.string.equalsIgnoreCase(productSKU, "none")) {
        // Populating the input params for the service call and invoking the service
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[4];
        var inputParams = {
            "key": mobileFabricConfiguration.bestByAPIKey,
            "productSKU": productSKU
        };
        if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
            initializeMobileFabric(getProductReviews, productSKU);
        } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
            getServiceResponse(operationName, inputParams, "getting Product Reviews", getProductReviewsSuccessCallback);
        }
    } else {
        // The user didn't pick a value so we'll show the alert
        kony.ui.Alert({
            message: "Please select a valid Product ",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Product Reviews",
            yesLabel: "OK"
        }, {});
    }
}

function getProductReviewsSuccessCallback(getProductReviewsResponse) {
    dismissProgress();
    // Check the opstatus for 0 meaning it worked
    if (getProductReviewsResponse !== null && getProductReviewsResponse.opstatus === 0) {
        // Checking to make sure we DO have results
        kony.print("########## Response received from service call: " + JSON.stringify(getProductReviewsResponse));
        if (getProductReviewsResponse.reviews !== null && getProductReviewsResponse.reviews !== "") {
            if (getProductReviewsResponse.reviews.length > 0) {
                frmProductDetails.lblReviewsNo.text = "Number Of Reviews : " + getProductReviewsResponse.total;
                //frmProductDetails.lblReviewsNo.setVisibility(true);
                //***** checking submitedBy and set the proper image
                for (var i = 0; i < getProductReviewsResponse.reviews.length; i++) {
                    getProductReviewsResponse.reviews[i].reviewerName = "Submitted By : " + getProductReviewsResponse.reviews[i].reviewerName;
                    var rating = parseInt(getProductReviewsResponse.reviews[i].rating);
                    kony.print("########## rating: " + rating);
                    switch (rating) {
                        case 1:
                            getProductReviewsResponse.reviews[i].rating = "ratings_star_1.png";
                            break;
                        case 2:
                            getProductReviewsResponse.reviews[i].rating = "ratings_star_2.png";
                            break;
                        case 3:
                            getProductReviewsResponse.reviews[i].rating = "ratings_star_3.png";
                            break;
                        case 4:
                            getProductReviewsResponse.reviews[i].rating = "ratings_star_4.png";
                            break;
                        default:
                            getProductReviewsResponse.reviews[i].rating = "ratings_star_5.png";
                    }
                }
                frmProductDetails.sgmtReview.widgetDataMap = {
                    lblReviewTitle: "title",
                    lblReviewerName: "reviewerName",
                    lblReviewContent: "comment",
                    imgRating: "rating"
                };
                frmProductDetails.sgmtReview.setData(getProductReviewsResponse.reviews);
                frmProductDetails.lblReviewsNo.setVisibility(true);
                frmProductDetails.sgmtReview.setVisibility(true);
            } else {
                kony.print("########## no reviews available ######");
                frmProductDetails.lblReviewsNo.text = "no reviews available";
                frmProductDetails.lblReviewsNo.setVisibility(true);
                //frmProductDetails.sgmtReview.setVisibility(false);
            }
        } else {
            kony.print("########## no reviews available ######");
            frmProductDetails.lblReviewsNo.text = "no reviews available";
            frmProductDetails.lblReviewsNo.setVisibility(true);
            //frmProductDetails.sgmtReview.setVisibility(false);
        }
        kony.application.dismissLoadingScreen();
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + getProductReviewsResponse.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "ProductReviewsResponse",
            yesLabel: "OK"
        }, {});
    }
    frmProductDetails.show();
}
//	********************	To solve the circular issue :
function simpleStringify(object) {
    var simpleObject = {};
    for (var prop in object) {
        if (!object.hasOwnProperty(prop)) {
            continue;
        }
        if (typeof(object[prop]) == 'object') {
            continue;
        }
        if (typeof(object[prop]) == 'function') {
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
}