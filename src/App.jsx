import './App.css'
import MyRoutes from './MyRoutes.jsx';


function App() {
  
  return (
    <div className="App">
      <div className="mainContent">
        <MyRoutes />
      </div>
      {/* {currency.length === 0 ? <p>Loading</p> : <p>{`${currency[0].name}`}</p>} */}
    </div>
  )
}

export default App
