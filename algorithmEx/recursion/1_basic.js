var tracker = 0;

var callMe = () => {
  tracker++;
  if (tracker == 3) return "loop";

  return callMe() + " hi ";
};

console.log(callMe());
