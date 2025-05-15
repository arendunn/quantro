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
      <footer className="text-center py-4 mt-auto">
        <p className="text-sm">© 2023 Quantro. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;