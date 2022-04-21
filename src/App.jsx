import './App.css'
import MyRoutes from './MyRoutes.jsx';
import { AuthProvider } from './context/authProvider';
import GlobalHeader from './components/GlobalHeader';

function App() {
  
  return (
    <AuthProvider>
      <div className="App">
        <div className="mainContent">
          <GlobalHeader/>
          <MyRoutes />
        </div>
      </div>
    </AuthProvider>
  )
}

export default App;
