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
            className="flex justify-center items-center font-bold h-10 w-40 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded hidden sm:flex"
          >
            + Add Goal
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="flex justify-center items-center font-bold h-10 sm:w-20 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded sm:hidden"
          >
            +
          </button>
          {showForm && (
            <GoalForm onClose={() => setShowForm(false)} />
          )}
      </nav>
    </div>
  );
}

export default Navbar;