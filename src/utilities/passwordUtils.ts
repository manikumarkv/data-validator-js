import PasswordStrength from "../passwordStrength";

export default class PasswordUtilities {

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
    public static shuffle(array: any) {
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
    private static isWeekoptions(stringLength : number,numsLength : number)
    {
        let defaultOptions = this.passwordDefaultOptions;
        let _weakoptions = defaultOptions.weekOptions;
        let _stringCheck = this.isValidStringLength(stringLength,_weakoptions.minAlphabets,_weakoptions.maxAlphabets)
        let _numsCheck= this.isValidNumsLength(numsLength,_weakoptions.minNumerics,_weakoptions.maxNumberics)
        if(_stringCheck && _numsCheck)
        return true
        else false
    }
    private static isGoodoptions(stringLength : number,numsLength : number,specialCharsLength : number)
    {
        let defaultOptions = this.passwordDefaultOptions;
        let _mediumoptions = defaultOptions.mediumOptions;
        let _stringCheck = this.isValidStringLength(stringLength,_mediumoptions.minAlphabets,_mediumoptions.maxAlphabets)
        let _numsCheck= this.isValidNumsLength(numsLength,_mediumoptions.minNumerics,_mediumoptions.maxNumberics)
        let _specialCharCheck=this.isValidSpecialCharsLength(specialCharsLength,_mediumoptions.minSpecialChars,_mediumoptions.maxSpecialChars)
        if(_stringCheck && _numsCheck && _specialCharCheck)
        if(_stringCheck && _numsCheck)
        return true
        else false
    }
    private static isStrongoptions(stringLength : number,numsLength : number,specialCharsLength : number)
    {
        let defaultOptions = this.passwordDefaultOptions;
        let _strongoptions =defaultOptions.strongOptions;
        let _stringCheck = this.isValidStringLength(stringLength,_strongoptions.minAlphabets,_strongoptions.maxAlphabets)
        let _numsCheck= this.isValidNumsLength(numsLength,_strongoptions.minNumerics,_strongoptions.maxNumberics)
        let _specialCharCheck=this.isValidSpecialCharsLength(specialCharsLength,_strongoptions.minSpecialChars,_strongoptions.maxSpecialChars)
        if(_stringCheck && _numsCheck && _specialCharCheck)
        return true
        else false
    }
    private static isValidStringLength(stringLength : number, minLength : number,maxLength:number){
        return stringLength >= minLength && stringLength <= maxLength
    }

    private static isValidNumsLength(numsLength : number, minLength : number,maxLength:number){
        return numsLength >= minLength && numsLength <= maxLength
    }
    private static isValidSpecialCharsLength(specialCharsLength : number, minLength : number,maxLength:number){
        return specialCharsLength >= minLength && specialCharsLength <= maxLength
    }
    /**
     * GenerateSimplePassword
     */
    public static GenerateSimplePassword(): string {
        let charLength = 6,
            numericLength = 2;
        let charset = "abcdefghijklmnopqrstuvwxyz",
            retVal = "",
            numericset = "0123456789";
        for (let i = 0, n = charset.length; i < charLength; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = numericset.length; i < numericLength; ++i) {
            retVal += numericset.charAt(Math.floor(Math.random() * n));
        }
        let inpArray = retVal.split("")
        let retValArray = this.shuffle(inpArray)
        return retValArray;
        //TODO: return shuffled string
    }
    /**
     * GenerateGoodPassword
     */
    public static GenerateGoodPassword(): string {
        let charLength = 8,
            numericLength = 4;
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            retVal = "",
            numericset = "0123456789";
        for (let i = 0, n = charset.length; i < charLength; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = numericset.length; i < numericLength; ++i) {
            retVal += numericset.charAt(Math.floor(Math.random() * n));
        }
        let inpArray = retVal.split("")
        let retValArray = this.shuffle(inpArray)
        return retValArray;
    }

    /**
     * GenerateStrongePassword
     */
    public static GenerateStrongPassword(): string {
        let charLength = 8,
            numericLength = 4,
            specialCharLength = 4;
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numericset = "0123456789",
            specialCharSet = "!@#$%^&*()_+{}[]:<>?/",
            retVal = "";
        for (let i = 0, n = charset.length; i < charLength; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = numericset.length; i < numericLength; ++i) {
            retVal += numericset.charAt(Math.floor(Math.random() * n));
        }
        for (let i = 0, n = specialCharSet.length; i < specialCharLength; ++i) {
            retVal += specialCharSet.charAt(Math.floor(Math.random() * n));
        }
        let inpArray = retVal.split("")
        let retValArray = this.shuffle(inpArray)
        return retValArray;
    }

    /**
     * IsPasswordWeek
     */
    public static IsPasswordWeek(value: string): boolean {
        let strings: any = []
        let nums: any = []
        let specialCharacters: any = []
        let inpArray = value.split("")
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
        let _weakoptions=this.isWeekoptions(strings.length,nums.length)
        if(_weakoptions)
        return true
        else 
        return false
    }
    /**
     * IsPasswordGood
     */
    public static IsPasswordGood(value: string): boolean {
        let strings: any = []
        let nums: any = []
        let specialCharacters: any = []
        let inpArray = value.split("")
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

        let _mediumoptions=this.isGoodoptions(strings.length,nums.length,specialCharacters.length)
        if(_mediumoptions)
        return true
        else 
        return false
    }
    /**
     * IsPasswordStrong
     */
    public static IsPasswordStrong(value: string): boolean {
        let strings: any = []
        let nums: any = []
        let specialCharacters: any = []
        let inpArray = value.split("")
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
        let _strongoptions=this.isStrongoptions(strings.length,nums.length,specialCharacters.length)
        if(_strongoptions)
        return true
        else 
        return false
    }
    /** 
     * checkPasswordStrength
    */
    public static CheckPasswordStrength(value: string, options?: object): PasswordStrength {
        let defaultOptions = this.passwordDefaultOptions;
        (<any>Object).assign(defaultOptions, options)
        // const passwordDevidedArray: any = this.getPasswordStringObject(value)
        // let strings: [] = passwordDevidedArray.strings
        // let nums: [] = passwordDevidedArray.nums
        // let specialCharacters: [] = passwordDevidedArray.specialCharacters
        let strings: any = []
        let nums: any = []
        let specialCharacters: any = []
        let inpArray = value.split("")
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
       let _weekCheck=this.isWeekoptions(strings.length,nums.length,)
       let _mediumCheck =this.isGoodoptions(strings.length,nums.length,specialCharacters.length)
       let _strongCheck = this.isStrongoptions(strings.length,nums.length,specialCharacters.length)
       if(_weekCheck)
       return PasswordStrength.Week
       else if(_mediumCheck)
       return PasswordStrength.Good
       else if(_strongCheck)
       return PasswordStrength.Strong
       else
        return '';
    }
    
}