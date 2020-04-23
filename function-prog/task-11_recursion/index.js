let count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0;

const sec = a => {
	count1++;
	return 1 + a;
};
const add = (a, b) => {
	count2++;
	return (b === 0) ? a : sec(add(a, b - 1));
};
const mpy = (a, b) => {
	count3++;
	return (b === 1) ? a : add(a, mpy(a, b - 1));
};
// console.log(mpy(11, 3)); // 33
// mpy(11,3) = 11 + mpy(11,2) = 11 + 11 + mpy(11,1) = 11 + 11 + 11 = 33

const pwr = (a, b) => {
	count4++;
	return (b === 1) ? a : mpy(a, pwr(a, b - 1));
}
console.log(`Degree: ${pwr(3, 2)}, sec была вызвана ${count1} раз, add - ${count2}, mpy - ${count3}, pwd - ${count4}`);


// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
const sumTo = n => {
    if( n == 1 ) {
        return n;
    } else {
        return n + sumTo(n-1);
    }
}
// in one line
// const sumTo = n => n == 1 ? n : (n + sumTo(n - 1));
console.log(`Sum: ${sumTo(10)}`);

// Вычислить факториал n!
// n! = n * (n - 1) * (n - 2) * ...*1

const factorial = n => n == 1 ? n : n * factorial(n - 1);
console.log(`Factorial: ${factorial(3)}`)

// Вывести на консоль числа от 0 до n в обратном порядке
const backNum = n => {
    if(n === 0) {
        return n;
    } else {
        console.log(n)
        backNum(n - 1)
    }
}
backNum(5);