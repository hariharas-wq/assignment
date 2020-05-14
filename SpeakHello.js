(function(window) {
    var hello= new Object();
    var Word = "Hello";
    hello.speak = function(name) {
        console.log(Word+" "+ name);
    };
    window.hello = hello;
})(window);