import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/registrations', () => {
      return [
        {
          id: 1,
          category: 'cachorro',
          name: 'Capitu',
          age: 3,
          weight: '11 kg',
          bree: 'viralata'
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
