(function(window) {
    var bye = new Object();
    var Word = "Good Bye";
    bye.speak = function speak(name) {
        console.log(Word+" "+ name);
    };
    window.bye= bye;
})(window);