let invoices = [
    {name:"Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "07/05/1995"
    },
    {name:"Lebogang Malebe",
        number: 2000,
        amount: "$15,800",
        due: "12/02/1997"
    },
    {name:"Tebogo Kekana",
        number: 2003,
        amount: "$20,200",
        due: "06/05/2005"
    }
]

export const getInvoices = ()=>{
        return invoices;
}

export const getInvoice = (number) => {
  return invoices.find(invoice=>invoice.number === number)
}
