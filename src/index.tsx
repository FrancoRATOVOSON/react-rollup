import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";
import "./styles.css"

const rootElement = document.getElementById("root")

if(!rootElement) throw new Error("Root element missing")

const root = ReactDom.createRoot(rootElement)

root.render(<App/>)