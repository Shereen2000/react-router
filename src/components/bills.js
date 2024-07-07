import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from './data'

const Bills = () => {

let params = useParams()
const invoice = getInvoice(parseInt(params.invoiceId))



  return (
     <main className='flex flex-col py-5 my- w-1/3 mx-auto '>
                <h2>Total Due</h2>
                <p>{invoice.name}</p>
                <p>{invoice.amount}</p>
                <p>{invoice.due}</p>
    
    </main>
  )
}

export default Bills