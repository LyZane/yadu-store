import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Matrix from './pages/Matrix'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matrix" element={<Matrix />} />
    </Routes>
  )
}
