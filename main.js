console.log("Hello node js");

// salvo la variabile d'ambiente
const pin = process.env.PIN;
console.log(pin);

// salvo l'argomento passato 
const arg = process.argv[2]
console.log(arg);

let message = "";

// verifico l'identitá e il codice di accesso
if (arg === "admin" && Number(pin) === 666) {
    message = "Welcome adming";
} else {
    message = "Access restricted";
};

console.log(message);