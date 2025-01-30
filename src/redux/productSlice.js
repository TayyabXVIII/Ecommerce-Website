import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"products",
    initialState:{
        items: [
          { id: 1, name: "Product 1", price: 100, stock: 10, description: "Description 1", image: "image1.jpg" },
          { id: 2, name: "Product 2", price: 200, stock: 5, description: "Description 2", image: "image2.jpg" },
        ],
      },
    reducers: {
        reduceStock(state, action) {
          const product = state.items.find(item => item.id === action.payload.id);
          if (product) {
            product.stock -= action.payload.quantity;
          }
          state.items.push({
            id: item.id,
            name: item.name,  
            image: item.image, // Include image
            quantity: 1,
            totalPrice: item.price
          });
        },
      },
})
export const { reduceStock } = productSlice.actions;

export default productSlice.reducer;