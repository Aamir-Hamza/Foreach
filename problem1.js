function forEachCustom(array, callback) {
    for (let i = 0; i < array.length; i++) {
       
        callback(array[i], i, array);
    }
}


const numbers = [1, 2, 3, 4, 5];

forEachCustom(numbers, (element, index, array) => {
    console.log(`Element at index ${index} is ${element}`);
});