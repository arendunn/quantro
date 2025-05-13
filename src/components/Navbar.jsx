import { useState } from 'react';
import GoalForm from '../components/GoalForm.jsx';
import logo from '/src/assets/quantro.png';


const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='w-full'>
      <nav className="flex justify-between items-center py-2 px-10 w-full shadow-md">
          <img src={logo} alt="Logo" className="h-25" />
          <button
            onClick={() => setShowForm(true)}
            class className="flex justify-center items-center h-10 w-40 p-4 bg-[#428ce2] rounded"
          >
            + Add Goal
          </button>
          {showForm && (
            <GoalForm onClose={() => setShowForm(false)} />
          )}
      </nav>
    </div>
  );
}

export default Navbar;