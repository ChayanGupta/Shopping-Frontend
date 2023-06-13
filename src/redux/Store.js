import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import authReducer from './AuthSlice'
import cartReducer from './CartSlice'

const persistConfig = {
  key: 'root',
  storage: storageSession
}

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false
    })
})

export const persistor = persistStore(Store)