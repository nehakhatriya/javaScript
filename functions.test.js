const linearSearch=require('./functions')
test('linear search for item already present',()=>{
    expect(linearSearch([10,20,30,40,50],30)).toBe(3)
});
test('linear search for item not present',()=>{
    expect(linearSearch([10,20,30,40,50],60)).toBe("not found")
});