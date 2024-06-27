// Create Item Objects
function createItem(name, category, price, stock){
    let item = {
        //Ensure proper handling of cases where item details might be missing or undefined, using logical OR.
        name: name || "",
        category: category || "",
        price: price || 0,
        stock: stock || 0,
        updateStock(newStock){
            this.stock = newStock;
        },
        applyDiscount(discount){
            this.price = price - (price*discount);
        }
    } 
    return item;
};

// Create an Inventory Object
const inventory = {
    items : [],
    addItem(item){this.items.push(item)},
    removeItem(itemName){
        this.items.forEach( (item, index)=>{
            if(itemName===item.name)
                this.items.splice(index, 1);
        })}
    
    ,getItem(itemName){
        return this.items.find(item => item.name === itemName);
    }
    
    ,filterItems(predicate){
       return this.items.filter(predicate);
    }
 
}

//Create several item instances and add them to the inventory.
inventory.addItem(createItem("banana", "food", 15, 100));
inventory.addItem(createItem("apple", "food", 20, 100));
inventory.addItem(createItem("shirt", "clothes", 250, 2000));
inventory.addItem(createItem("pants", "clothes", undefined, 2000));
//console.log(inventory.items);

//Update stock and apply discounts to certain items.
inventory.getItem("banana").updateStock(80);
inventory.getItem("banana").updateStock(0);
inventory.getItem("shirt").applyDiscount(0.4);
console.log(inventory.getItem("shirt").price);
inventory.getItem("shirt").updateStock(1000);
inventory.getItem("shirt").updateStock(0);
//console.log(inventory.items);

//Use the filterItems method to find items under a specific category or below a certain stock level.
const foodItems = inventory.filterItems(item => item.category === "food");
//console.log(foodItems);

//Remove an item from the inventory and verify it is no longer available.
inventory.items = inventory.items.filter(item => item.stock > 0);
//console.log(inventory.items);

