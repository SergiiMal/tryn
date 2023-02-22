// let a = 5;
// let b = a;
// console.log(a, b)
// ---------------------------------------------
	
// const arr = [1, 2, 3];
// const arr2 = [5, 6, 7];
// const  arr3 = arr - arr2
// // console.log(arr, arr2)
// console.log(arr3)
	// --------------------------------------------- 

// function add(a, b) {
// 	console.log(a + b);
// }
// const sum = add(5, 6);
// console.log(sum);

// const sum2 = add(sum, 10);
// console.log(sum2)
	// --------------------------------------------- 
			
// function addPosition(a, b) {
// 			if (a >= 0 && b >= 0) {
// 				return a + b;
// 			} else {
// 				return 0;
// 	 }

// 	// return a + b;
// 	}

// const sum = addPosition(-5, 6);
// const sum2 = addPosition(sum, 10);
// console.log(sum2);
// ---------------------------------------------

// const bmi = calcBMI('88,3', '1,75');
// console.log(bmi);

// function calcBMI(weight, height) {
// 	weight = replaceCommaToDot(weight);
// 	height = replaceCommaToDot(height);
// 	return getRoundedNumber(weight / height ** 2); // 88.3 / 1.75 * 1.75(в квадраті)	// 28.8
// }

// // Перетворення коми а крапку

// function replaceCommaToDot(string) {
// 	return string.replace(',', '.');
// }

// // Округлення цифри до першого знаку після крапки

// function getRoundedNumber(number) {
// 	return Number(number.toFixed(1));
// }
// ---------------------------------------------

// Найбільше число в масиві

// function findLargestNumber(numbers) {
// 	let max = numbers[0];
// 	for (const number of numbers) {
// 		if (number > max) max = number;
// 	}
// 	return max
// };	

// console.log(findLargestNumber([2, 17 , 94 , 1, 23, 37]))
// console.log(findLargestNumber([49, 4, 7, 83, 12]))

// ---------------------------------------------

