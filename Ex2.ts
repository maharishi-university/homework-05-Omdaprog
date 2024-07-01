const isPrime = (n: number): Promise<{ prime: boolean }> => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
                return;
            }
        }
        resolve({ prime: true });
    });
};

console.log('start');
isPrime(7)
    .then(console.log)
    .catch(console.error);
console.log('end');


(async() => {
    try {
        const data = await isPrime(7)
        console.log(data) 
    } catch (error) {
        console.error(error)
    }
    
})()
