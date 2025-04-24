import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./redux/store"
import "./index.css"

// Make sure we have a root element in the HTML
const rootElement = document.getElementById("root") || document.createElement("div")
if (!document.getElementById("root")) {
  rootElement.id = "root"
  document.body.appendChild(rootElement)
}

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
