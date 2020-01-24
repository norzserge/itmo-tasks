console.clear();

const isPrimeNum = (num = 11) => {
	let i = 2;
	let isPrime = true;
	if (num < 2 || num > 1000000) throw new Error (`Введеное значение "${num}" должно быть больше 1 и меньше 1 000 000!`);
	while(i <= Math.floor(Math.sqrt(num)) && isPrime == true) {
		if (num % i == 0) { isPrime = false };
		i++;
	}
	console.log(`Число ${num} ${isPrime ? '- простое' : '- составное'}`);
};

try {
	isPrimeNum(1);
} catch(e) {
	console.log(`${e.name}: ${e.message}`);
} finally {
	console.log('Программа выполнена');
}