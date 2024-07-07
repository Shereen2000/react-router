import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Invoices from './components/invoices';
import Expenses from './components/expenses';
import Bills from './components/bills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App/>}>
            <Route path='/invoices' element ={<Invoices/>}>
                <Route path='/invoices/123' element ={<div>Bills</div>}> </Route>
                <Route index element=
                {
                    <main><p>Select an invoice</p></main>
                }></Route>
                  <Route path=':invoiceId' element={<Bills/>}></Route>
             </Route>
           
             <Route path='/expenses' element ={<Expenses/>}></Route>
             <Route path="*" element={<div><h1>No content</h1></div>}></Route>
      </Route>
     
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

