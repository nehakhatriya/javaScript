const {areaOfCircle,areaOfSquare,areaOfRectange}=require('./geometry')
const { TestScheduler } = require('jest')

//are all function defined
test('area of circle function is defined',()=>{
    expect(areaOfCircle(4)).toBeDefined();
})
test('area of square function is defined',()=>{
    expect(areaOfSquare(4)).toBeDefined();
})
test('area of cuboid function is defined',()=>{
    expect(areaOfRectange(4,3,)).toBeDefined();
})

//AREA OF CIRCLE, SQUARE, RECT, WITH POSITIVE DIMENTIONS
test('for positive radius of circle',()=>{
    expect(areaOfCircle(4)).toBe("50.27")
})

test('for positive sides of Sqaure',()=>{
    expect(areaOfSquare(4)).toBe("16.00")
})
test('for positive sides of Rectange',()=>{
    expect(areaOfRectange(4,3)).toBe("12.00")
})

//AREA OF CIRCLE, SQUARE, RECT WITH NEGATIVE DIMENTION
test('for negative radius of circle',()=>{
    expect(areaOfCircle(-4)).toBe("50.27")
})

//AREA OF CIRCLE, SQUARE, RECT WITH WRONG(MORE or LESS THAN REQUIRED) PARAMETERS
test('for more than one radius input of circle',()=>{
    expect(areaOfCircle(4,2)).toBe("not valid radius")
})
test('for more than one radius input of circle',()=>{
    expect(areaOfCircle()).toBe("not valid radius")
})

test('for more than one side input of Sqaure',()=>{
    expect(areaOfSquare(4,3)).toBe("not valid side")
})
test('for more than two sides input of Rectange',()=>{
    expect(areaOfRectange(4,3,4)).toBe("not valid dimentions")
})

//AREA OF CIRCLE, SQUARE, RECT WITH STRING PARAMETER
test('for string as radius of circle',()=>{
    expect(areaOfCircle("neha")).toBe("not valid radius")
})

test('for string as sides of Sqaure',()=>{
    expect(areaOfSquare("neha")).toBe("not valid side")
})
test('for string as sides of Rectange',()=>{
    expect(areaOfRectange("neha",3)).toBe("not valid dimentions")
})