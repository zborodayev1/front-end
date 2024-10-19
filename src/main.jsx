// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routers } from "./assets/routers/Routers.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <Provider store={store}>
      <Routers />
    </Provider>
  </>,
  // </StrictMode>,
);

persistor.persist();
