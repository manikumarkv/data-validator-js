class BrowserUtilities {
    /**
     * GetBrowser
     */
    public static GetBrowser(): string {
        return ''
    }

    /**
     * IsChrome
     */
    public static IsChromeBrowser(): boolean {
        return false
    }

    /**
     * IsIEBrowser
     */
    public static IsIEBrowser(): boolean {
        return false;
    }

    /**
     * IsSafari
     */
    public static IsSafariBrowser(): boolean {
        return false
    }

    /**
     * IsFirefoxBrowser
     */
    public static IsFirefoxBrowser(): boolean {
        return false
    }

    /**
     * IsEdgeBrowser
     */
    public static IsEdgeBrowser(): boolean {
        return false;
    }

    /**
     * IsOffline
     */
    public IsOffline(): boolean {
        return false;
    }

    /**
     * IsOnline
     */
    public IsOnline(): boolean {
        return false;
    }

    /**
     * IsMacMachine
     */
    public IsMacMachine(): boolean {
        return false
    }

    /**
     * IsUbuntuMachine
     */
    public IsUbuntuMachine(): boolean {
        return false;
    }

    /**
     * IsWindowsMachine
     */
    public IsWindowsMachine(): boolean {
        return false
    }

    /**
     * IsBrowser
     */
    public IsBrowser(): boolean {
        return false;
    }

    /**
     * GetUserLanguage
     */
    public GetUserLanguage() : string{
        return ''
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
        return false
    }

    /**
     * IsCookieDisabled
     */
    public IsCookieDisabled() {
        return false // navigator.cookieEnabled
    }

    /**
     * IsJavaEnabled
     */
    public IsJavaEnabled() {
        return false // navigator.javaEnabled();
    }
}