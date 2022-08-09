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
          category: 'Dev',
          amount: 8000,
          createdAt: new Date('2022-04-25 10:00:00'),
        },
        {
          id: 2,
          title: 'Hamburguer',
          type: 'withdraw',
          category: 'Food',
          amount: 50,
          createdAt: new Date('2022-04-25 21:00:00'),
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1200,
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
      
      return schema.create('transactions', data);
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


