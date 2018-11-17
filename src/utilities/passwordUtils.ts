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
        // let weekOptions: any = {
        //     minAlphabets: 0,
        //     minNumerics: 0,
        //     minSpecialChars: 0,
        //     maxAlphabets: 0,
        //     maxNumberics: 0,
        //     maxSpecialChars: 0
        // }
        return PasswordStrength.Week;
    }
}




