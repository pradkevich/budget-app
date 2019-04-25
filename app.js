// BUDGET CONTROLLER
var budgetController = (function () {
    //for future
})();

// UI CONTROLLER
var UIController = (function () {
    // for future
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        // Get field input data
        // Add the item to the budget controller
        // Add the item to the UI
        // Calculate the budget
        // Display the budget on the UI
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);
