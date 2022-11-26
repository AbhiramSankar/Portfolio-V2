import { configureStore } from "@reduxjs/toolkit";
import { navigation } from "./nav";

export default configureStore({
    reducer: {
        navigation: navigation.reducer
    }
})