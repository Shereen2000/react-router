import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="container mx-auto">
      <nav className='bg-gray-100 flex gap-4'>
          <Link to ='/Invoices'><span>Invoices</span></Link>
          <Link to ='/Expenses'><span>Expenses</span></Link>
      </nav>
      <Outlet/>

    </div>
  );
}

export default App;
