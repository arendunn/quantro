import './App.css'
import Navbar from './components/Navbar.jsx'
import { GoalProvider } from './context/GoalContext.jsx';
import GoalDashboard from './components/GoalDashboard.jsx'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <GoalProvider>
        <Navbar />
        <GoalDashboard />
      </GoalProvider>
    </div>
  )
}

export default App;