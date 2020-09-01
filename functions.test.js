const linearSearch=require('./functions')

test('function must be defined',()=>{
    expect(linearSearch([10,20,30,40,50],30)).toBeDefined();
})

test('if function contain string error msg is returned',()=>{
    expect(linearSearch([10,20,30,'neha',50],30)).toBe("error");
})
test('linear search for item already present',()=>{
    expect(linearSearch([10,20,30,40,50],30)).toBe(3)
});
test('linear search for item not present',()=>{
    expect(linearSearch([10,20,30,40,50],60)).toBe("not found")
});