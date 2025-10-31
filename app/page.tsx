"use client"
import { ReactNode } from "react";
import store from "./(Kambaz)/store";
import { Provider } from "react-redux";

export default function App({ children }: { children: ReactNode }) {
    return (
      <Provider store={store}>
        <div>
          {children}
        </div>
      </Provider>
    );
  }
