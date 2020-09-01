function areaOfCircle(radius){
    try{
      
    if(typeof radius!== "string" && arguments.length==1)
    return (Math.PI*radius*radius).toPrecision(4)
    else
    throw "not valid radius"
    }
    catch(e)
    { return e}
    
}

function areaOfSquare(side){
    try{
        if(typeof side!== "string" && arguments.length==1)
        return (side*side).toPrecision(4)
        else
        throw "not valid side"
    }
    catch(e)
    { return e}
}
function areaOfRectange(length,breadth){
    try{
        if(typeof length==="string" || typeof breadth== "string" || arguments.length!=2)
        throw "not valid dimentions"    
        else
        return (length*breadth).toPrecision(4)
    }
    catch(e)
    { return e}
    
}
module.exports={areaOfCircle,areaOfSquare,areaOfRectange}
   

