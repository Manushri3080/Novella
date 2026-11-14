
import { Link, Route, Routes } from 'react-router'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

function Home() {
  return <h1>Welcome to Novella Atelier</h1>
}

function PlaceholderPage({ title }) {
  return <h1>{title} Page - Coming Soon</h1>
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>
}

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <Navbar />

      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<PlaceholderPage title="Shop" />} />
          <Route path="/product/:id" element={<PlaceholderPage title="Product Details" />} />
          <Route path="/cart" element={<PlaceholderPage title="Cart" />} />
          <Route path="/login" element={<PlaceholderPage title="Login" />} />
          <Route path="/register" element={<PlaceholderPage title="Register" />} />
          <Route path="/about" element={<PlaceholderPage title="About" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
          <Route path="/wishlist" element={<PlaceholderPage title="Wishlist" />} />
          <Route path="/collection" element={<PlaceholderPage title="Collections" />} />
          <Route path="/space" element={<PlaceholderPage title="Our Spaces" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
