//contains unique value. will skip duplicate values
const myset=new Set()
//adding elementss
myset.add('neha')
myset.add('khatriya')
myset.add('neha')
myset.add(24)
console.log(myset)

//size of set
console.log(myset.size)
console.log(myset.has(24))
//removing an element
myset.delete('khatriya')
console.log(myset)