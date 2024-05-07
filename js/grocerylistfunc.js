$(function () {
    function GroceryItem(name, quantity, category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category
    };

    function createGroceryItemRow(groceryitem) {
        return `<tr><td>${this.name}</td><td>${this.quantity}</td></tr>`
    };

    const items = [];
    function populateGroceryTable(groceryItemArray) {
        const $groceryTable = $('#grocery-list');
        $groceryTable.html('<tr><th>Name</th><th>Quantity</th></tr>');
        groceryItemArray.forEach(function(groceryitem) {
            $groceryTable.append(createGroceryItemRow(groceryitem));
        });
    };

    populateGroceryTable(items);

    $('#add-item-form').on('submit', function(e) {
        e.preventDefault();
        const newItem = new GroceryItem
    });
});