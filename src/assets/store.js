import { defineStore } from "pinia";

export const useCartStore = defineStore('Cart', {
    state: () => ({
        products: [],
        isCartOpened: false
    }),
    getters: {
        count: (state) => {
            let count = 0;
            state.products.forEach(item => {
                count += item.quantity;
            });
            return count;
        },
        totalSum: (state) => {
            return  state.products.reduce((acc, item) => acc + +item.price * item.quantity, 0).toFixed(2);
        }
    },
    actions: {
        addItem(product, quantity) {
            let similarItem = this.products.find(item => item.id == product.id);
            
            if(similarItem) {
                similarItem.quantity += quantity;
            } else {
                this.products.push({
                    id: product.id,
                    images: product.images,
                    name: product.name,
                    price: product.price,
                    quantity
                });
            }
        },
        removeItem(id, all=false) {

            let similarItem = this.products.find(item => item.id == id);
            if(all || similarItem.quantity < 2) {
                this.products = this.products.filter(item => item.id != id);
            } else {
                similarItem.quantity--;
            }
        },

        findProductInBag(id) {
            
            return this.products.find(item => item.id == id) ? true : false;
        },
        getQuantityById(id) {
            let count = 0;
            this.products.forEach(item => {
                if(item.id == id) {
                    count += item.quantity;
                }
            });
            return count;
        },
        toggleCart() {
            this.isCartOpened = !this.isCartOpened;
        }
    }
});