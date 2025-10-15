"use client";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          <div className="pt-16">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
