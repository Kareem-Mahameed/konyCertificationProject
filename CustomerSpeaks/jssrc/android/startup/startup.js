//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "CustomerSpeaks",
    appName: "CustomerSpeaks",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "25.37.201.102",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "CustomerSpeaks",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeCopyFBox067f46324411443();
    initializeCopyFBox06ec3f27756384f();
    initializeCopyFBox0c4c09b2a4e2d4c();
    initializeSegRowOnSaleWithBanner();
    initializetmpReviewRow();
    initializetmpSegRow();
    initializetmpSegRowOnSale();
    frmHomeGlobals();
    frmProductDetailsGlobals();
    frmProductListGlobals();
    frmTestImagesGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        preappinit: AS_AppEvents_c103e85bd3324eaf84727501e76f8258,
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;