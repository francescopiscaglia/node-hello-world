console.log("Hello node js");

const pin = process.env.PIN;
console.log(pin);

const arg = process.argv[2]
console.log(arg);

let message = "";

if (arg == "admin" && pin == 666) {
    message = "Welcome adming";
} else {
    message = "Access restricted";
};

console.log(message);