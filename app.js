var budgetController = (function () {

    var x = 23;
    var add = function (a) {
        return x + a;
    }

    return {
        publictest: function (b) {
            console.log(add(b));
        }
    }

})();

var UIController = (function () {

    // for future
})();


var controller = (function (budgetCtrl, UICtrl) {

    // for future
})(budgetController, UIController);