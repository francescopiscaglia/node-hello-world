console.log("Hello node js");

// salvo la variabile d'ambiente
const pin = process.env.PIN;
console.log(pin);

// salvo l'argomento passato 
const arg = process.argv[2]
console.log(arg);

if (!pin) {
    console.log("You must add a PIN variable");
    process.exit(1);
};

if (!arg) {
    console.log("You must add a user");
    process.exit(1);
};

let message = "";

// verifico l'identitá e il codice di accesso
if (arg === "admin" && Number(pin) === 666) {
    message = "Welcome admin";
} else {
    message = "Access restricted";
};

console.log(message);