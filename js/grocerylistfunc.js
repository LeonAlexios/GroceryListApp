$(function () {
    function GroceryItem(name, quantity, category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category
    };

    function createGroceryItemRow(groceryitem) {
        return `<tr><td>${groceryitem.name}</td><td>${groceryitem.quantity}</td></tr>`
    };

    const items = [];
    function populateGroceryTable(groceryItemArray) {
        const $groceryTable = $('#grocery-list-produce');
        $groceryTable.html('<tr><th>Name</th><th>Quantity</th></tr>');
        groceryItemArray.forEach(function (groceryitem) {
            $groceryTable.append(createGroceryItemRow(groceryitem));
        });
    };

    populateGroceryTable(items);

    $('#add-item-form').on('submit', function (e) {
        e.preventDefault();
        const newItem = new GroceryItem($('#item-name').val(), Number($('#item-quantity').val()), $('#item-category').val());
        items.push(newItem);
        populateGroceryTable(items);
        this.reset();
    });


});
