function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    console.log(average);
    return average;
}

const myArray = [1, 2, 3, 4, 5];
average(myArray);