console.clear();
let i = 2;
let num = 4;
let isPrime = true;

while(i <= Math.floor(Math.sqrt(num)) && isPrime == true) {
	if (num % i == 0) { isPrime = false };
	i++;
}

console.log(`Число ${num} ${isPrime ? 'простое' : 'составное'}`);