//array count function implimentation
function size(inArray){
    numCount =0
    inArray.forEach(element => numCount++)
    return numCount
    }


array1 = [10,11,12,13,14]
array2 = [20,21,22]
//size function
console.log('size of given array', array1, 'is', size(array1))
console.log('size of given array', array1, 'is', size(array2))
//remove each element and count
    //pop will remove element at end
    array1.pop()
    console.log('popped array1',array1)
    array2.pop()
    console.log('popped array2',array2)

    //shift will remmove element at front
    array1.shift()
    console.log('shifted array1',array1)
    array2.shift()
    console.log('shifted array2',array2)



//add each element and count
    //push will add element at last
    array1.push(15)
    console.log('pushed array1',array1)
    array2.push(23)
    console.log('pushed array2',array2)
    //unshift will add element at front
    array1.unshift(9)
    console.log('unshifted array1',array1)
    array2.unshift(19)
    console.log('unshifted array2',array2)   

//array.slice
slicedArray = array1.slice(1, 4); // Slice from index 1 to 3 (exclusive)
console.log('sliced array1 is',slicedArray); // Output: [11,12, 13]

//array inside a array
console.log('arrayin side a array using spread operator')
console.log('array 1 is', array1)
console.log('array 2 is', array2)
newArray2 = [[...array1],...array2]
console.log(newArray2)

//replace second array elements into first array
console.log('replace second array elements into first array')
console.log('array 1 is', array1)
console.log('array 2 is', array2)
array1=array2
console.log('updated array1 is',array1)