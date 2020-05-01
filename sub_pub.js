var EventBus = function () {
  var eventTopics = {};

  this.addEventListener = function (eventName, listener) {
    if (!eventTopics[eventName] || eventTopics[eventName].length < 1) {
      eventTopics[eventName] = [];
    }
    eventTopics[eventName].push(listener);
  };

  this.emitEventListeners = function (eventName, params) {
    if (!eventTopics[eventName] || eventTopics[eventName].length < 1) return;
    eventTopics[eventName].forEach(function (listener) {
      console.log("listener", listener);
      listener(!!params ? params : {});
    });
  };
}; //end

var EmailService = function () {
  EventBus.call(this);
  this.createEmail = function (to, from, subject) {
    //send the email
    //publish/emit the event = order/new
    console.log("subject", subject);
    this.emitEventListeners("SEND", subject);
  };
};
EmailService.prototype = Object.create(EventBus.prototype);
EmailService.prototype.constructor = EmailService;

var emailService = new EmailService();

document.getElementById("email").addEventListener("click", function () {
  emailService.createEmail("to", "from", "subject");
});

document.getElementById("subscribe").addEventListener("click", function () {
  emailService.addEventListener("SEND", function (param) {
    var para = document.createElement("p");
    var node = document.createTextNode("emailSubject is " + param);
    para.appendChild(node);
    document.getElementById("message").appendChild(para);
  });
  console.log("you have added a listner. now Send email");
});
