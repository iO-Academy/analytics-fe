import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Homepage from "./pages/Homepage"
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />

        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Routes>
        </div>
        
      </BrowserRouter>
    </>
  )
}

export default App
