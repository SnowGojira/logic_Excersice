var sayHello = (args) => {
  console.log(args);
};

setTimeout(function callback() {
  sayHello("third!");
}, 0);
sayHello("First!");
console.log("second!");
