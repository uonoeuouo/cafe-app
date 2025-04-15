import './App.css'
import CafeForm from './components/cafeFrom'
import CafeList from './components/cafelist'

function App() {
  return (
    <div className="app-container">
      <h1>カフェ口コミサイト</h1>
      <CafeList />
      <CafeForm />
    </div>
  )
}

export default App
