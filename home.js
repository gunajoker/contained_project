var Human = /** @class */ (function () {
    function Human() {
    }
    Human.speak = function (word) {
        console.log(word);
    };
    return Human;
}());
var me = new Human();
Human.speak("I am common for all humans");
