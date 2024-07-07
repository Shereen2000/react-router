import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { getInvoices } from './data'

const invoices = () => {
  let invoices = getInvoices();
  return (
    <div className='text-center'><h1>invoices</h1>
        <div className='flex flex-col gap-4'>
            {invoices.map((invoice)=>(

              <NavLink 
                  // style={({isActive})=>{ return {color:isActive?"red":""}}} 
                  // className='bg-gray-200' 
                  to ={"/invoices/"+String(invoice.number)} 
                  key ={invoice.number}
                  className={({isActive})=>isActive?"text-red-600":""}
              > 
                    {invoice.name}
              </NavLink>
            ))}
        </div>
          <Outlet/>
    </div>
  
  )
}

export default invoices