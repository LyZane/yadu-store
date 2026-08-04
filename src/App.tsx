import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Matrix from './pages/Matrix'
import Articles from './pages/Articles'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matrix" element={<Matrix />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  )
}
