// to saure the each elements of array

var numArray = [2,4,6,8,9]
var sqNumArray = []

for (var i = 0; i<numArray.length; i++)
    sqNumArray.push(numArray[i]*numArray[i])

    console.log('input array is :',numArray)
    console.log('output array is :',sqNumArray)