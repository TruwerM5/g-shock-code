import { defineStore } from "pinia";

export const useAllProductsStore = defineStore('allProducts', {
    state: () => ({
        data: [],
        select: 'Price Asc',
        minPrice: 0,
        maxPrice: 0,
        loaded: false,
        error: false
    }),
    getters: {
        getMinPrice: (state) => {
            if(state.loaded) {
                let min =  state.data[0].price;
                
                for(let item of state.data) {
                    if(item.price < min) min = item.price;
                }
                return min;
            }
            
        },
        getMaxPrice:  (state) => {
            if(state.loaded) {
                let max =  state.data[0].price;
                
                for(let item of state.data) {
                    if(Number(item.price) > Number(max)) max = Number(item.price);
                }
                return Number(max);
            }
            
        },
        getByPriceRange: (state) => {
            return (min, max) => {
                
                return state.data.filter(item => item.price >= +min && item.price <= +max);
            }
        }
    },
    actions: {
        async fetchProducts(url) {
            try {
                let request = await fetch(url);
                let response = await request.json();
                this.data = response;
            } catch {
                this.error = true;
            }
                this.loaded = true;
            
        },
        sortByPriceAsc(arr) {
            return arr.sort((a, b) => a.price - b.price);
        },
        sortByPriceDesc(arr) {
            return arr.sort((a,b) => b.price - a.price );
        },
        getMinAndMaxPrice() {
            let min = this.data[0].price;
            let max = this.data[0].price;
            this.data.forEach(item => {
                if(Number(item.price) < Number(min)) {
                    min = item.price
                } else if(Number(item.price) > Number(max)) {
                    max = item.price;
                }

            });
            
            this.minPrice = Number(min);
            this.maxPrice = Number(max);
        }
    }
})