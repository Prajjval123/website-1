import Dashboard from "./pages/dashboard/dashboard"
import Support from "./pages/support/Support"
import TransactionPage from "./pages/transaction/TransactionPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/transactions" element={<TransactionPage />}/>
          <Route path="/support" element={<Support />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
