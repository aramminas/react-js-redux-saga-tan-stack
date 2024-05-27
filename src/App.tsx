import React from "react";
import { Provider } from "react-redux";

import AppRouter from "./router";
import store from "./redux/configureStore";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
