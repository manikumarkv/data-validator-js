import StringUtilities from "./../utilities/stringUtils";

test('StringUtilities ==> IsNullOrEmpty ==> case 1', () => {
    let testedMethodResult = StringUtilities.IsNullOrEmpty('mani');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> IsNullOrEmpty ==> case 2', () => {
    let testedMethodResult = StringUtilities.IsNullOrEmpty(null);
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});


// StringUtilities.IsNullOrEmpty('mani') // false
// StringUtilities.IsNullOrEmpty(null) // true
// StringUtilities.IsNullOrEmpty(undefined) // true
// StringUtilities.IsNullOrEmpty("1") // false