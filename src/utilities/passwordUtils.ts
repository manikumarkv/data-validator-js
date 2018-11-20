import PasswordStrength from "../passwordStrength";

export default class ScriptUtilities {
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
    public static GenerateStrongePassword(): string {
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
            maxAlphabets: 20,
            maxNumberics: 6,
            maxSpecialChars: 0
        }
          let mediumOptions: any = {
            minAlphabets: 10,
            minNumerics: 4,
            minSpecialChars: 0,
            maxAlphabets: 25,
            maxNumberics: 12,
            maxSpecialChars: 0
        }
          let strongOptions: any = {
            minAlphabets: 30,
            minNumerics: 10,
            minSpecialChars: 10,
            maxAlphabets: 40,
            maxNumberics: 15,
            maxSpecialChars: 17
        }
        return PasswordStrength.Week;
    }
}




