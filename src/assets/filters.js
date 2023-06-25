import { defineStore } from "pinia";

export const useFilteredStore = defineStore('Filter', {
    state: () => ({
        allProducts: []
        
    }),
    getters: {
        getAllProds: (state) => {
            return state.allProducts;
        }
    },
    actions: {
        setProds(data) {
            this.allProducts = data;
            console.log(this.allProducts);
        },
        sortByPriceRange(min, max) {
            
        }
    }
});
