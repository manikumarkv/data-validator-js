import Dictinary from "../utilities/dictionary";

test('Dictionary ==>  add ==> case 1', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.containsKey(1);
    expect(myDictionary.containsKey(1)).toBe(true);
});

test('Dictionary ==> add ==>count ==> case 2', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.count();
    expect(myDictionary.count()).toBe(3)

});
test('Dictionary ==> add ==>getvalue ==> case 3', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.getValue(2);
    expect(myDictionary.getValue(2)).toBe('nitesh')
});
test('Dictionary ==> add ==>getkeys ==> case 4', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.getKeys();
    expect(myDictionary.getKeys()).toEqual([1,2,3])
});
test('Dictionary ==> add ==>clear ==> case 5', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.clear();
    expect(myDictionary.clear()).toBe(undefined)
});
test('Dictionary ==> add ==>containskey ==> case 6', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.containsKey(2);
    let myExpectations=true
    expect(myDictionary.containsKey(2)).toBe(myExpectations)
});
test('Dictionary ==> add ==>update ==> case 8', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.update(3,'congo')
    let myExpectations=true
    expect(myDictionary.update(3,'congo')).toBe(myExpectations)
});
test('Dictionary ==> add ==>containsValue ==> case 9', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.containsValue('nitesh');
    let myExpectations=true
    expect(myDictionary.containsValue('nitesh')).toBe(myExpectations)
});
test('Dictionary ==> add ==>containsValue ==> case 10', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.containsValue('jfg');
    let myExpectations=false
    expect(myDictionary.containsValue('jhds')).toBe(myExpectations)
});
test('Dictionary ==> add ==>remove ==> case 11', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.remove(1);
    let myExpectations=false
    expect(myDictionary.remove(1)).toBe(myExpectations)
});
test('Dictionary ==> add ==>remove ==> case 12', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.remove(3);
    let xx = myDictionary.remove(2)
    let cc = myDictionary.remove(222)
    let myExpectations=false
    expect(cc).toBe(myExpectations)
});
test('Dictionary ==> add ==>upsert ==> case 13', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    let actual= myDictionary.upsert(1,'4673462');
    let myExpectations=undefined
    expect(actual).toBe(myExpectations)
});
test('Dictionary ==> add ==>sortedUpsert ==> case 14', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    let actual= myDictionary.sortedUpsert(5,'jhgdks');
    let myExpectations=undefined
    expect(actual).toBe(myExpectations)
});
test('Dictionary ==> add ==>sortedUpsert ==> case 15', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    let actual= myDictionary.sortedUpsert(3,'jfgdkhlashgoslhgfdfghsldf');
    let myExpectations=undefined
    expect(actual).toBe(myExpectations)
});
test('Dictionary ==> add ==>getvalues ==> case 16', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    let actual= myDictionary.getValues();
    let myExpectations=["mani", "nitesh", "hari"]
    expect(actual).toEqual(myExpectations)
});
test('Dictionary ==> add ==>sortedUpsert ==> case 17', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    let actual= myDictionary.sortedUpsert(5,'jhgdks');
    let myExpectations=undefined
    expect(actual).toBe(myExpectations)
});
test('Dictionary ==>  add ==> case 18', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    let myExpectations=false
    expect(myDictionary.add(1,'mani')).toBe(myExpectations);
});
test('Dictionary ==>  add ==> case 18', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    let myExpectations=true
    expect(myDictionary.add(2,'odif')).toBe(myExpectations);
});
test('Dictionary ==>  add ==> containskey ==> case 19', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.containsKey(2);
    let myExpectations=false
    expect(myDictionary.containsKey(2)).toBe(myExpectations);
});
test('Dictionary ==> add ==>update ==> case 20', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.update(3,'congo')
    let myExpectations=false
    expect(myDictionary.update(4,'codlfngo')).toBe(myExpectations)
});
test('Dictionary ==> add ==>update ==> case 21', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.remove(3)
    let myExpectations=2
    expect(myDictionary.count()).toBe(myExpectations)
});
test('Dictionary ==> add ==>update ==> case 22', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.clear()
    let myExpectations=0
    expect(myDictionary.count()).toBe(myExpectations)
});
test('Dictionary ==> add ==>update ==> case 23', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');
    myDictionary.add(2,'nitesh');
    myDictionary.add(3, 'hari');
    myDictionary.update(3,'congo')
    let myExpectations='congo'
    expect(myDictionary.getValue(3)).toBe(myExpectations)
});




    

    // myDictionary.add(2, 'asas');
    // myDictionary.add(3,'sddsd')

    // let data = myDictionary.getValue(1)
    // myDictionary.clear();
    // myDictionary.count()
    // myDictionary.containsKey(45) // false
    // myDictionary.getKeys()
    // myDictionary.remove(1)
    // myDictionary.update(1, '3434')
    // myDictionary.upsert(1,'3434343434')
    //let testedMethodResult = HashMap.;
    //let myExpectations = false
    // expect(data).toBe('mani');