setTimeout(function cb() {
  console.log("third!");
}, 1000);

var sayHello = (args) => {
  console.log(args);
};

sayHello("First!");
console.log("second!");
