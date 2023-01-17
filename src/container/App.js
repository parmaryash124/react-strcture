import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ErrorBoundary } from "../components/Error/index";

// import axios from "axios";
// import { Provider } from "react-redux";
// import { store } from "../Redux/store";
// import Loader from "../components/common/loader";
// import { setupAxios } from "../utils";
// const { PUBLIC_URL } = process.env.dev;

// setupAxios(axios, store);

const AppContainer = () => (
  <ErrorBoundary>
    {/* <Provider store={store}> */}
    {/* <Suspense fallback={<Loader isSuspense />}> */}
    <Suspense>
      {/* <Loader>  */}
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/* </Loader> */}
    </Suspense>
    {/* </Provider> */}
  </ErrorBoundary>
);

export default AppContainer;
