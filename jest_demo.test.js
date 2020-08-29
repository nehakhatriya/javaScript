const functions=require('./jest_demo')

//toBe
test ('Adding two positive numbers',()=>{
    expect(functions.add(3,4)).toBe(7)
})
test ('Adding two negative numbers',()=>{
    expect(functions.add(-3,-4)).toBe(-7)
})

//toBeNull
test ('should be null',()=>{
    expect(functions.isNull()).toBeNull()
})

//toEqual
test ('returning user object ',()=>{
    expect(functions.createUser()).toEqual({firstName:'zayn', secondName:'malik'})
})

//less than and greater than
test ('less than or equal ',()=>{
    const load1=200
    const load2= 400
    expect(load1+load2).toBeLessThanOrEqual(1000)
})

//Regex(.toMatch)
test (' there is no I in team',()=>{

    expect('team').not.toMatch(/I/i)
})

//Array(.toContain)
test ('Admin should be in usernames ',()=>{
    usernames=['zayn','joey','admin']
    expect(usernames).toContain('admin')
}) 

//async functions
test ('user fetched name should be Leanne Graham',()=>{
    expect.assertions(1)
  return functions.fetchUser().then(data => {
      expect(data.name).toEqual('Leanne Graham')
  })
})






