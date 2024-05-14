// 1) Leeres Array mit 100 Plätzen erzeugen
// 2) 100 Zufallszahlen von 2 bis 1000 einfüllen
let arr = Array(100).fill(0).map(() => Math.floor(Math.random() * (1000 - 1)) + 2);



// 3) Funktion zur Überprüfung, ob eine Zahl eine Primzahl ist
function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

// 4) Primzahlen herausfiltern
let filtert = arr.filter(isPrime);

// 5) Primzahlen aufsteigend sortieren
filtert.sort((a, b) => a - b);

console.log(filtert);