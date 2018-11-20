class BrowserUtilities {
    /**
     * GetBrowser
     */
    public static GetBrowser(): string {
        const userAgent = window.navigator.userAgent;
        var isBrowserIE = (userAgent.indexOf("MSIE") != -1 || userAgent.indexOf("Trident") != -1) ? true : false;
        var isBrowserEdge = (userAgent.indexOf("Edge/") != -1) ? true : false;
        var isBrowserChrome = (userAgent.indexOf("Chrome") != -1) ? true : false;
        var isBrowserFirefox = (userAgent.indexOf("Firefox") != -1) ? true : false;
        var isBrowserSafari;
        if (userAgent.indexOf("Safari") != -1) {
            if ((userAgent.indexOf("Chrome") != -1) || (userAgent.indexOf("Android") != -1)) {
                isBrowserSafari = false;
            }
            else {
                isBrowserSafari = true;
            }
        }

        if (isBrowserChrome) {
            return "Chrome";
        }
        else if (isBrowserEdge) {
            return "Edge";
        }
        else if (isBrowserFirefox) {
            return "FireFox";
        }
        else if (isBrowserIE) {
            return "Internet Explorer";
        }
        else if (isBrowserSafari) {
            return "Safari";
        }
        else
            return 'No browser';
    }

    /**
     * IsOffline
     */
    public IsOffline(): boolean {
        if (navigator.onLine)
            return false;
        else
            return true;
    }

    /**
     * IsOnline
     */
    public IsOnline(): boolean {
        if (navigator.onLine)
            return true;
        else
            return false;
    }

    /**
     * IsMacMachine
     */
    public IsMacMachine(): boolean {
        if (window.navigator.platform == "MacIntel")
            return true
        else
            return false
    }

    /**
     * IsUbuntuMachine
     */
    public IsUbuntuMachine(): boolean {
        if (window.navigator.platform == "Linux")
            return true
        else
            return false
    }

    /**
     * IsWindowsMachine
     */
    public IsWindowsMachine(): boolean {
        if (window.navigator.platform == "Win")
            return true
        else
            return false
    }

    /**
     * IsBrowser
     */
    // public IsBrowser(): boolean {
    //     return false;
    // }

    /**
     * GetUserLanguage
     */
    public GetUserLanguage(): string {
        var getUserLanguage = navigator.language
        return getUserLanguage
    }

    /**
     * IsChargerConnected
     */
    public IsChargerConnected(): boolean {

        return false
    }

    /**
     * getBatteryStatus
     */
    public getBatteryStatus() {

        // navigator.getBattery().then(a=> {console.log(a)})
    }

    /**
     * IsCookieEnabled
     */
    public IsCookieEnabled() {
        if (navigator.cookieEnabled)
            return true
        else
            return false
    }

    /**
     * IsCookieDisabled
     */
    public IsCookieDisabled() {
        if (navigator.cookieEnabled)
            return false
        else
            return true
    }

    /**
     * IsJavaEnabled
     */
    public IsJavaEnabled() {
        if (navigator.javaEnabled)
            return true
        else
            return false
    }
}