import passwordUtils from "../utilities/passwordUtils"

test('PasswordUtils ==> CheckpasswordStregth==> case 1', () => {
    let weekOptions: any = {
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfgh12',weekOptions)
    let myExpectations = "week"
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStregth==> case 2', () => {
    let mediumOptions: any = {
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfghlipyop1234#!',mediumOptions)
    let myExpectations = "good"
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStregth==> case 3', () => {
    let strongOptions: any = {
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfghlipyopqwertyuio12345678#!**@@',strongOptions)
    let myExpectations = "strong"
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStregth==> case 3', () => {
    let strongOptions: any = {
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfghlipyopqwertyuioyyyyyyyyy1234567890++#!**@@',strongOptions)
    let myExpectations = ''
    expect(testedMethodResult).toBe(myExpectations);
});