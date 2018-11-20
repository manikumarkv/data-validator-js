import PasswordStrength from "../passwordStrength";

export default class PasswordUtilities {
    /**
     * GenerateSimplePassword
     */
    public static GenerateSimplePassword(): string {
        return ''
    }
    /**
     * GenerateGoodPassword
     */
    public static GenerateGoodPassword(): string {
        return ''
    }

    /**
     * GenerateStrongePassword
     */
    public static GenerateStrongPassword(): string {
        return ''
    }

    /**
     * IsPasswordWeek
     */
    public static IsPasswordWeek(value: string): boolean {
        return false;
    }

    /**
     * IsPasswordGood
     */
    public static IsPasswordGood(value: string): boolean {
        return false
    }

    /**
     * IsPasswordStrong
     */
    public static IsPasswordStrong(): boolean {
        return false;
    }

    public static CheckPasswordStrength(value: string, options: object): PasswordStrength {
        let weekOptions: any = {
            minAlphabets: 6,
            minNumerics: 2,
            minSpecialChars: 0,
            maxAlphabets: 10,
            maxNumberics: 4,
            maxSpecialChars: 0
        }
        let mediumOptions: any = {
            minAlphabets: 12,
            minNumerics: 4,
            minSpecialChars: 2,
            maxAlphabets: 20,
            maxNumberics: 8,
            maxSpecialChars: 4
        }
        let strongOptions: any = {
            minAlphabets: 20,
            minNumerics: 8,
            minSpecialChars: 6,
            maxAlphabets: 25,
            maxNumberics: 10,
            maxSpecialChars: 8
        }

        let stringArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*']

        let strings: any = []
        let nums: any = []
        let specialCharacters: any = []

        let inpArray = value.split("")

        inpArray.map(val => {
            if (stringArray.indexOf(val.toLowerCase()) > -1) {
                strings.push(val)
            } else if (numArray.indexOf(val) > -1) {
                nums.push(val)
            }
            else if (specialChars.indexOf(val) > -1) {
                specialCharacters.push(val)
            }
        })

        if ((strings.length >= weekOptions.minAlphabets && strings.length <= weekOptions.maxAlphabets) && (nums.length >= weekOptions.minNumerics && nums.length <= weekOptions.maxNumberics) && (specialCharacters.length >= weekOptions.minSpecialChars && specialCharacters.length <= weekOptions.maxSpecialChars))
            return PasswordStrength.Week;
        else if ((strings.length >= mediumOptions.minAlphabets && strings.length <= mediumOptions.maxAlphabets) && (nums.length >= mediumOptions.minNumerics && nums.length <= mediumOptions.maxNumberics) && (specialCharacters.length >= mediumOptions.minSpecialChars && specialCharacters.length <= mediumOptions.maxSpecialChars))
            return PasswordStrength.Good;
        else if ((strings.length >= strongOptions.minAlphabets && strings.length <= strongOptions.maxAlphabets) && (nums.length >= strongOptions.minNumerics && nums.length <= strongOptions.maxNumberics) && (specialCharacters.length >= strongOptions.minSpecialChars && specialCharacters.length <= strongOptions.maxSpecialChars))
            return PasswordStrength.Strong;
        else
            return '';
    }
}




