import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem'
      }}>
        <Link to="/invoices">Invoices</Link> | {''}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
