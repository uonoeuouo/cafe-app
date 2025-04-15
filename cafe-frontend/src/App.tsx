import './App.css'
import CafeForm from './components/cafeFrom'
import CafeList from './components/cafelist'
import CafeHome from './components/cafetop'

function App() {
  return (
    <div className="app-container">
      <h1>カフェ口コミサイト</h1>
      <CafeHome />
      <CafeList />
      <CafeForm />
    </div>
  )
}

export default App
