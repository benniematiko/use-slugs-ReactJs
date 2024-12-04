// import Layout from "./components/Layout"
import Home from "./pages/Home"
import Details from "./pages/Details"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import CartTab from "./components/CartTab"

function App() { 

  return (
   <main>
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={< Layout />} />  */}
        <Route path="/" element={< Home />} /> 
        <Route path="/about" element={< About />} />        
        <Route path="/carttab" element={< CartTab />} />        
      
        <Route path="/:slug" element={<Details /> } />
      </Routes>
    </Router>

  
   
   </main>
  )
}

export default App
