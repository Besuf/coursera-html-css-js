(function () {
  var speakWord = "Hello";
  helloSpeaker = {};

  helloSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
