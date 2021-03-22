
import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs';
import { App } from './App';

createServer({
  routes(){
    this.namespace='api';

    this.get('/transactions',()=>{
      return[{
        id:1,
        title:'transactions 1',
        amount:400,
        type:'deposito',
        categoria:'Food',
        createdAt: new Date()
      }       
      ]
    })
    this.post('/transactions',(schema, requests)=>{
      const data = JSON.parse(requests.requestBody)

      return data
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


