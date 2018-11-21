import PasswordStrength from "../passwordStrength";

export default class PasswordUtilities {
    private static weekOptions: any = {
        minAlphabets: 6,
        minNumerics: 2,
        minSpecialChars: 0,
        maxAlphabets: 10,
        maxNumberics: 4,
        maxSpecialChars: 0
    }
    private static mediumOptions: any = {
        minAlphabets: 12,
        minNumerics: 4,
        minSpecialChars: 2,
        maxAlphabets: 20,
        maxNumberics: 8,
        maxSpecialChars: 4
    }
    private static strongOptions: any = {
        minAlphabets: 20,
        minNumerics: 8,
        minSpecialChars: 6,
        maxAlphabets: 25,
        maxNumberics: 10,
        maxSpecialChars: 8
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
    /**
     * GenerateSimplePassword
     */
    public static GenerateSimplePassword(): string {
        let charLength = 6,
            numericLength = 2;
        let charset = "abcdefghijklmnopqrstuvwxyz",
            retVal = "",
            numericset = "0123456789",
            specialCharSet = "!@#$%^&*()_+{}[]:<>?/";
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
            numericset = "0123456789",
            specialCharSet = "!@#$%^&*()_+{}[]:<>?/";
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

        if ((strings.length >= this.weekOptions.minAlphabets && strings.length <= this.weekOptions.maxAlphabets) && (nums.length >= this.weekOptions.minNumerics && nums.length <= this.weekOptions.maxNumberics) && (specialCharacters.length >= this.weekOptions.minSpecialChars && specialCharacters.length <= this.weekOptions.maxSpecialChars))
            return true;
        else
            return false;
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

        if ((strings.length >= this.mediumOptions.minAlphabets && strings.length <= this.mediumOptions.maxAlphabets) && (nums.length >= this.mediumOptions.minNumerics && nums.length <= this.mediumOptions.maxNumberics) && (specialCharacters.length >= this.mediumOptions.minSpecialChars && specialCharacters.length <= this.mediumOptions.maxSpecialChars))
            return true;
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
        if ((strings.length >= this.strongOptions.minAlphabets && strings.length <= this.strongOptions.maxAlphabets) && (nums.length >= this.strongOptions.minNumerics && nums.length <= this.strongOptions.maxNumberics) && (specialCharacters.length >= this.strongOptions.minSpecialChars && specialCharacters.length <= this.strongOptions.maxSpecialChars))
            return true;
        else
            return false;
    }
    /** 
     * checkPasswordStrength
    */
    public static CheckPasswordStrength(value: string, options?:object): PasswordStrength {
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
        if (options == null) {
            if ((strings.length >= this.weekOptions.minAlphabets && strings.length <= this.weekOptions.maxAlphabets) && (nums.length >= this.weekOptions.minNumerics && nums.length <= this.weekOptions.maxNumberics) && (specialCharacters.length >= this.weekOptions.minSpecialChars && specialCharacters.length <= this.weekOptions.maxSpecialChars))
                return PasswordStrength.Week;
            else if ((strings.length >= this.mediumOptions.minAlphabets && strings.length <= this.mediumOptions.maxAlphabets) && (nums.length >= this.mediumOptions.minNumerics && nums.length <= this.mediumOptions.maxNumberics) && (specialCharacters.length >= this.mediumOptions.minSpecialChars && specialCharacters.length <= this.mediumOptions.maxSpecialChars))
                return PasswordStrength.Good;
            else if ((strings.length >= this.strongOptions.minAlphabets && strings.length <= this.strongOptions.maxAlphabets) && (nums.length >= this.strongOptions.minNumerics && nums.length <= this.strongOptions.maxNumberics) && (specialCharacters.length >= this.strongOptions.minSpecialChars && specialCharacters.length <= this.strongOptions.maxSpecialChars))
                return PasswordStrength.Strong;
            else
                return '';
        }
        else
        {
            
            return '';
        }
    }
   
}




