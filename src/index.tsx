import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: { 
    transaction: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela de landing page',
          type: 'deposit',
          amount: 8000,
          category: 'Dev',
          createdAt: new Date('2022-04-25 10:00:00'),
        },
        {
          id: 2,
          title: 'Hamburguer',
          type: 'withdraw',
          amount: 50,
          category: 'Food',
          createdAt: new Date('2022-04-25 21:00:00'),
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 1200,
          category: 'Casa',
          createdAt: new Date('2022-04-25 08:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () =>{
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


