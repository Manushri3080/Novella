import { Link, Route, Routes } from 'react-router'

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
      <nav className="flex flex-wrap gap-6 p-6 bg-white shadow-sm">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </nav>

      <main className="p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<PlaceholderPage title="Shop" />}
          />
          <Route
            path="/product/:id"
            element={<PlaceholderPage title="Product Details" />}
          />
          <Route
            path="/cart"
            element={<PlaceholderPage title="Cart" />}
          />
          <Route
            path="/login"
            element={<PlaceholderPage title="Login" />}
          />
          <Route
            path="/register"
            element={<PlaceholderPage title="Register" />}
          />
          <Route
            path="/about"
            element={<PlaceholderPage title="About" />}
          />
          <Route
            path="/contact"
            element={<PlaceholderPage title="Contact" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App