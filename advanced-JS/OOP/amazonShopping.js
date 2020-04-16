//Amazon Shopping

const user = {
    name: 'Kim',
    active: true, 
    cart: [],
    purchases: [],
    history: [],
    accountBalance: 0,
    addItemToCart(item) {
        const tax = item.price * 3/100
        const totalAmount = item.price + tax
        const newItem = {
            item, 
            tax, 
            totalAmount 
        }
        this.cart.push(newItem)
        const log = `${this.name} adds ${item.name} to cart`
        this.history.push(log)
    },
    purchaseItem(item) {
        this.addItemToCart(item)
        this.purchases.push(...this.cart)//suppose there is just one item 
        const log = `${this.name} purchases ${item.name}`
        this.history.push(log)
        this.cart = []
        console.log('cart', this.cart)
        console.log('purchases', this.purchases)
    },
    returnItem(item) {
        const index = this.purchases.findIndex(newitem.item.name === item.name);
        if(index !== -1) {
            const newItem = this.purchases.splice(index, 1) [0]
            this.accountBalance += newItem.totalAmount;
            const log = `${this.name} returns ${item.name}`
            this.history.push(log)
            console.log('refunds', newItem.totalAmount);
        }
    }
}

const item = {
    name: 'pencil',
    price: 1
}

user.purchaseItem(item);
user.returnItem(item);
console.log('history ', user.history)

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart
 
//Bonus:
// accept refunds.
// Track user history.