import PasswordStrength from "../passwordStrength";

export default class PasswordUtilities {
    /**
     * GenerateSimplePassword
     */
    public static charset = "abcdefghijklmnopqrstuvwxyz"
    public static numericset = "0123456789";
    public static specialCharSet = "!@#$%^&*()_+{}[]:<>?/"
    public static GenerateSimplePassword(): string {
        let retVal = ""
        for (let i = 0, n = this.charset.length; i < this.passwordDefaultOptions.weekOptions.minAlphabets; ++i) {
            retVal += this.charset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = this.numericset.length; i < this.passwordDefaultOptions.weekOptions.minNumerics; ++i) {
            retVal += this.numericset.charAt(Math.floor(Math.random() * n));
        }
        const inpArray = retVal.split("")
        const retValArray = this.shuffle(inpArray)
        return retValArray;
    }
    /**
     * GenerateGoodPassword
     */
    public static GenerateGoodPassword(): string {
        let retVal=""
        for (let i = 0, n = this.charset.length; i < this.passwordDefaultOptions.mediumOptions.minAlphabets; ++i) {
            retVal += this.charset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = this.numericset.length; i < this.passwordDefaultOptions.mediumOptions.minNumerics; ++i) {
            retVal += this.numericset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = this.specialCharSet.length; i < this.passwordDefaultOptions.mediumOptions.minSpecialChars; ++i) {
            retVal += this.specialCharSet.charAt(Math.floor(Math.random() * n));
        }
        const inpArray = retVal.split("")
        const retValArray = this.shuffle(inpArray)
        return retValArray;
    }

    /**
     * GenerateStrongePassword
     */
    public static GenerateStrongPassword(): string {
        let retVal = ""
        for (let i = 0, n = this.charset.length; i < this.passwordDefaultOptions.strongOptions.minAlphabets; ++i) {
            retVal += this.charset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = this.numericset.length; i < this.passwordDefaultOptions.strongOptions.minNumerics; ++i) {
            retVal += this.numericset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = this.specialCharSet.length; i < this.passwordDefaultOptions.strongOptions.minSpecialChars; ++i) {
            retVal += this.specialCharSet.charAt(Math.floor(Math.random() * n));
        }
        const inpArray = retVal.split("")
        const retValArray = this.shuffle(inpArray)
        return retValArray;
    }
    /**
     * IsPasswordWeek
     */
    public static IsPasswordWeek(value: string): boolean {
        const defaultOptions = this.passwordDefaultOptions.weekOptions;
        if (this.isValid(value,defaultOptions))
        {
            return true
        } 
        else
        {
            return false
        }
    }
    /**
     * IsPasswordGood
     */
    public static IsPasswordGood(value: string): boolean {
        const _mediumoptions = this.passwordDefaultOptions.mediumOptions
        if (this.isValid(value,_mediumoptions))
        {
            return true
        }
        else
        {
            return false
        }        
    }
    /**
     * IsPasswordStrong
     */
    public static IsPasswordStrong(value: string): boolean {
        const _strongoptions = this.passwordDefaultOptions.strongOptions
        if (this.isValid(value,_strongoptions))
        {
            return true
        }
        else
        {
            return false
        }
    }
    /** 
     * checkPasswordStrength
    */
    public static CheckPasswordStrength(value: string, options?: object): PasswordStrength {
        const defaultOptions = this.passwordDefaultOptions;
        (<any>Object).assign(defaultOptions, options)
        const _weekCheck = this.isValid(value, defaultOptions.weekOptions)
        const _mediumCheck = this.isValid(value, defaultOptions.mediumOptions)
        const _strongCheck = this.isValid(value, defaultOptions.strongOptions)
        if (_weekCheck)
        {
            return PasswordStrength.Week
        }
        else if (_mediumCheck)
        {
            return PasswordStrength.Good
        }
        else if (_strongCheck)
        {
            return PasswordStrength.Strong
        }
        else
        {
            return '';
        }    
    }

    private static passwordDefaultOptions: any = {
        weekOptions: {
            minAlphabets: 6,
            minNumerics: 2,
            minSpecialChars: 0,
            maxAlphabets: 10,
            maxNumberics: 4,
            maxSpecialChars: 0
        },
        mediumOptions: {
            minAlphabets: 12,
            minNumerics: 4,
            minSpecialChars: 2,
            maxAlphabets: 20,
            maxNumberics: 8,
            maxSpecialChars: 4
        },
        strongOptions: {
            minAlphabets: 20,
            minNumerics: 8,
            minSpecialChars: 6,
            maxAlphabets: 25,
            maxNumberics: 10,
            maxSpecialChars: 8
        }
    }
    private static stringArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    private static numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    private static specialChars = ['!', '@', '#', '$', '%', '^', '&', '*']
    /**
     * 
     *Shuffle the inputarray
     */
    private static shuffle(array: any) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    /*
    **Passwordoperations check
    */
    private static getPasswordStringObject(value: string): object {
        const strings: any = []
        const nums: any = []
        const specialCharacters: any = []
        const inpArray = value.split("")
        inpArray.map(val => {
            if (this.stringArray.indexOf(val.toLowerCase()) > -1) {
                strings.push(val)
            } else if (this.numArray.indexOf(val) > -1) {
                nums.push(val)
            }
            else if (this.specialChars.indexOf(val) > -1) {
                specialCharacters.push(val)
            }
        })
        return {
            alphabets: strings,
            nums: nums,
            specialCharacters: specialCharacters
        }
    }
    private static isValid(val : string,options: any){
        const passwordDevidedArray: any = this.getPasswordStringObject(val)
        const strings: [] = passwordDevidedArray.alphabets
        const nums: [] = passwordDevidedArray.nums
        const specialCharacters: [] = passwordDevidedArray.specialCharacters
        const _stringCheck = this.isValidLength(strings.length,options.minAlphabets,options.maxAlphabets)
        const _numsCheck= this.isValidLength(nums.length,options.minNumerics,options.maxNumberics)
        const _specialCharCheck=this.isValidLength(specialCharacters.length,options.minSpecialChars,options.maxSpecialChars)
          if(_stringCheck && _numsCheck && _specialCharCheck)
          {
            return true
          }
          else
         {
            return false
         }
      }
    private static isValidLength(val :number,minLength: number, maxLength: number)
    {
        return val >= minLength && val <= maxLength
    }
}