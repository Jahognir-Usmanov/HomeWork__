import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base.scss";
import { ClerkProvider } from "@clerk/clerk-react";
import { shadesOfPurple } from "@clerk/themes";
import { PUBLISHABLE_KEY } from "./utils/constants.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { router } from "./routes.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{ baseTheme: shadesOfPurple }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/main"
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <div className="container">
              <RouterProvider router={router} />
            </div>
          </div>
        </ThemeProvider>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
