import Page from "../components/Page";
import "../styles/globals.css";
import "@fontsource/open-sans";
import { Provider } from "react-redux";
import { store } from "../state/store";
// import { configureStore } from "@reduxjs/toolkit";
// import globalReducer from "../state";
// import { setupListeners } from "@reduxjs/toolkit/query/react";
// import { UserApi } from "../state/services/UserApi";

// const store = configureStore({
//   reducer: {
//     global: globalReducer,
//     [UserApi.reducerPath]: UserApi.reducer,
//   },
//   middleware: (getDefault) => getDefault().concat(UserApi.middleware),
// });

// setupListeners(store.dispatch);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
