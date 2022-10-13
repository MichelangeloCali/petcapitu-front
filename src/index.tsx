import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    registration: Model,
  },

  seeds(server) {
    server.db.loadData({
      registrations: [
        {
          id: 1,
          name: 'Capitu',
          type: 'Cachorro',
          breed: 'SRD',
          gender: 'Fêmea',
          age: 3,
          weight: 11,
          createdAt: new Date('2022-06-20 11:00:00'),
        },
        {
          id: 2,
          name: 'Rogerio',
          type: 'Gato',
          breed: 'SRD',
          gender: 'Macho',
          age: 2,
          weight: 8,
          createdAt: new Date('2022-09-11 20:00:00'),
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/registrations', () => {
      return this.schema.all('registration')
    })

    this.post('/registrations', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('registration', data)
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
