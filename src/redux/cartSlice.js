import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity: 0, 
        totalAmount:0
    },
    reducers:{
        addToCart(state,action){
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += action.payload.price;
            } else{
                state.items.push({
                    ...action.payload,
                    quantity:1,
                    totalPrice:action.payload.price
                });
            }
            state.totalQuantity++;
            state.totalAmount += action.payload.price;
        },
        removeFromCart(state,action){
            const existingItem = state.items.find(item => item.id === action.payload);
            if(existingItem){
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        adjustQuantity(state,action){
            const { id , quantity } = action.payload;
            const item = state.items.find(item => item.id === id)
            if (item){
                state.totalQuantity += quantity - item.quantity;
                item.quantity = quantity;
                item.totalPrice = item.price * quantity;
            }
        },
         increaseQuantity(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
              existingItem.quantity++;
              existingItem.totalPrice += existingItem.price;
              state.totalQuantity++;
              state.totalAmount += existingItem.price;
            }
          },
      
          decreaseQuantity(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
              existingItem.quantity--;
              existingItem.totalPrice -= existingItem.price;
              state.totalQuantity--;
              state.totalAmount -= existingItem.price;
            }
          },
        clearCart(state){
            state.items=[];
            state.totalQuantity = 0
            state.totalAmount = 0;
        },
    }
})

export const {addToCart,removeFromCart,adjustQuantity,decreaseQuantity,increaseQuantity,clearCart} = cartSlice.actions;

export default cartSlice.reducer;