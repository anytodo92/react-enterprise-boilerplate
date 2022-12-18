import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authApi } from '../services/auth';
import authReducer, { logout } from '../views/auth/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const rootReducer = (state: any, action: any) => {
  if (action.type === logout.toString()) {
    Object.keys(state).forEach((key) => {
      storage.removeItem(`persist:${key}`);
    });
  }

  return persistedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: false,
    }).concat(authApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
