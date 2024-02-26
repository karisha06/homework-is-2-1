const find_max_in_array = (arr) => {
    return Math.max(...arr);
}

const userArray = [15, 7, 23, 4, 11, 9]; 

const maxValue = find_max_in_array(userArray);
console.log(`Наибольшее значение в массиве: ${maxValue}`);