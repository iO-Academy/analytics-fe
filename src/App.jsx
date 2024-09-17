import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Homepage from "./pages/Homepage"
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
