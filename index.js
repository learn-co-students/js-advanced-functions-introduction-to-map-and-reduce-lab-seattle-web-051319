// Map
const mapToNegativize = arr => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let newValue = arr[i] * -1;
        newArr.push(newValue);
    }    
    return newArr;
} 

const mapToNoChange = arr => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }    
    return newArr;
} 

const mapToDouble = arr => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let newValue = arr[i] * 2;
        newArr.push(newValue);
    }    
    return newArr;
} 

const mapToSquare = arr => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let newValue = arr[i] * arr[i];
        newArr.push(newValue);
    }    
    return newArr;
} 

// Reduce
const reduceToTotal = (arr, start=0) => {
    let currentTotal = start;
    for(let i = 0; i < arr.length; i++){
        let currentElement = arr[i];
        currentTotal += currentElement;
    }
    return currentTotal;
}

const reduceToAllTrue = arr => {
    let allTrue = true;
    for(let i = 0; i < arr.length; i++) {
        if(!!arr[i] === false) {
            allTrue = false;
            return allTrue;
        }
    }
    return allTrue;
}

const reduceToAnyTrue = arr => {
    let anyTrue = false;
    for(let i = 0; i < arr.length; i++) {
        if(!!arr[i] === true) {
            anyTrue = true;
            return anyTrue;
        }
    }
    return anyTrue;
}