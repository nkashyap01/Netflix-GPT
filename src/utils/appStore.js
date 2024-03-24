import { configureStore } from "@reduxjs/toolkit";


const appstore = configureStore(
    {
        reducer : {
            user : userReducer,
        },
    }
);
export default appstore;