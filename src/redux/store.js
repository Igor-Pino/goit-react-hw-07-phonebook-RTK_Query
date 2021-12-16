import { configureStore } from '@reduxjs/toolkit';

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';
import contactBookReducer from './reducers/contacrBookReducer';
import logger from 'redux-logger';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    contactBook: contactBookReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),

  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export { store };
