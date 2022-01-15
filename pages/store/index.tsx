import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storeSeesion from "redux-persist/lib/storage/session";
// import storage from 'redux-persist/lib/storage' // defaults to localStorage
import SliderIndexReducer from "./reducers/sliderIndexReducer";
import MenuReducer from "./reducers/menuReducer";
import NewsRefReducer from "./reducers/newsRefReducer";

type RootStore = ReturnType<typeof rootReducer>;

const storeConfig = {
  key: "root",
  storage: storeSeesion,
};

const rootReducer = combineReducers({
  sliderIndex: SliderIndexReducer,
  menu: MenuReducer,
  news: NewsRefReducer,
});

const myPersistReducer = persistReducer<RootStore, any>(
  storeConfig,
  rootReducer
);

const store = createStore(myPersistReducer);
export const persistor = persistStore(store);
export default store;
