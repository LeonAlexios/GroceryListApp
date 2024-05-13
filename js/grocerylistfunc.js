$(function () {
    function GroceryItem(name, quantity, category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category
    };

    function createProduceItemRow(groceryitem) {
        return `<tr><td>${groceryitem.name}</td><td>${groceryitem.quantity}</td><td data-item-name="${groceryitem.name}"><i id="icon" class="bi bi-app delete"></i></td></tr>`
    };
    function createDairyItemRow(groceryitem) {
        return `<tr><td>${groceryitem.name}</td><td>${groceryitem.quantity}</td><td data-item-name="${groceryitem.name}"><i class="bi bi-app delete"></i></td></tr>`
    };
    function createBakingItemRow(groceryitem) {
        return `<tr><td>${groceryitem.name}</td><td>${groceryitem.quantity}</td><td data-item-name="${groceryitem.name}"><i class="bi bi-app delete"></i></td></tr>`
    };
    function createGrainsItemRow(groceryitem) {
        return `<tr><td>${groceryitem.name}</td><td>${groceryitem.quantity}</td><td data-item-name="${groceryitem.name}"><i class="bi bi-app delete"></i></td></tr>`
    };
    function createMeatItemRow(groceryitem) {
        return `<tr><td>${groceryitem.name}</td><td>${groceryitem.quantity}</td><td data-item-name="${groceryitem.name}"><i class="bi bi-app delete"></i></td></tr>`
    };
    function createOtherItemRow(groceryitem) {
        return `<tr><td>${groceryitem.name}</td><td>${groceryitem.quantity}</td><td data-item-name="${groceryitem.name}"><i class="bi bi-app delete"></i></td></tr>`
    };

    const produceItems = [];
    const dairyItems = [];
    const bakingItems = [];
    const grainsItems = [];
    const meatItems = [];
    const otherItems = [];





    function populateProduceTable(produceItemArray) {
        const $produceTable = $('#grocery-list-produce');
        $produceTable.html('<tr><th>Name</th><th>Quantity</th><th>Check Off Item</th></tr>');
        produceItemArray.forEach(function (groceryitem) {
            $produceTable.append(createProduceItemRow(groceryitem));
        });
    };

    function populateDairyTable(dairyItemArray) {
        const $dairyTable = $('#grocery-list-dairy');
        $dairyTable.html('<tr><th>Name</th><th>Quantity</th><th>Check Off Item</th><</tr>');
        dairyItemArray.forEach(function (groceryitem) {
            $dairyTable.append(createDairyItemRow(groceryitem));
        });
    };

    function populateBakingTable(bakingItemArray) {
        const $bakingTable = $('#grocery-list-baking');
        $bakingTable.html('<tr><th>Name</th><th>Quantity</th><th>Check Off Item</th><</tr>');
        bakingItemArray.forEach(function (groceryitem) {
            $bakingTable.append(createBakingItemRow(groceryitem));
        });
    };

    function populateGrainsTable(grainsItemArray) {
        const $grainsTable = $('#grocery-list-grains');
        $grainsTable.html('<tr><th>Name</th><th>Quantity</th><th>Check Off Item</th><</tr>');
        grainsItemArray.forEach(function (groceryitem) {
            $grainsTable.append(createGrainsItemRow(groceryitem));
        });
    };

    function populateMeatTable(meatItemArray) {
        const $meatTable = $('#grocery-list-meat');
        $meatTable.html('<tr><th>Name</th><th>Quantity</th><th>Check Off Item</th><</tr>');
        meatItemArray.forEach(function (groceryitem) {
            $meatTable.append(createMeatItemRow(groceryitem));
        });
    };

    function populateOtherTable(otherItemArray) {
        const $otherTable = $('#grocery-list-other');
        $otherTable.html('<tr><th>Name</th><th>Quantity</th><th>Check Off Item</th><</tr>');
        otherItemArray.forEach(function (groceryitem) {
            $otherTable.append(createOtherItemRow(groceryitem));
        });
    };

    $('#add-item-form').on('submit', function (e) {
        e.preventDefault();

        const newItem = new GroceryItem($('#item-name').val(), Number($('#item-quantity').val()), $('#select-category').val());
        console.log($('#select-category').val());
        if (newItem.category.toLowerCase() == 'produce') {
            produceItems.push(newItem);
            populateProduceTable(produceItems);
        } else if (newItem.category.toLowerCase() == 'dairy') {
            dairyItems.push(newItem);
            populateDairyTable(dairyItems);
        } else if (newItem.category.toLowerCase() == 'baking') {
            bakingItems.push(newItem);
            populateBakingTable(bakingItems);
        } else if (newItem.category.toLowerCase()== 'grains') {
            grainsItems.push(newItem);
            populateGrainsTable(grainsItems);
        } else if (newItem.category.toLowerCase() == 'meat') {
            meatItems.push(newItem);
            populateMeatTable(meatItems);
        } else if (newItem.category.toLowerCase() == 'other') {
            otherItems.push(newItem);
            populateOtherTable(otherItems);
        }
        this.reset();
    });

    $('#icon').on('click', function(e) {
        this.classList.removeClass("bi bi-app");
        this.classList.addClass("bi bi-arrow-down-square");
        
    })

});
