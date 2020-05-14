(function() {
    var names = ["Hari", "Jack", "Johnson", "Ramesh", "Aman", "Joel", "Priyanshu", "Viswajith", "Chinmay", "Peri"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            bye.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
    }
})();