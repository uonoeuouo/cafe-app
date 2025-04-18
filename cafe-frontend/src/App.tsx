import './App.css'
import CafeForm from './components/cafeFrom'
import CafeList from './components/cafelist'
import CafeHome from './components/cafetop'

function App() {
  return (
    <div className="app-container">
      <CafeHome />
      <CafeList />
      <CafeForm />
    </div>
  )
}

export default App
