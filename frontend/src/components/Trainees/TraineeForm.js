import { useState } from 'react';
import { useAddTrainee } from '../../hooks/useApi';

export const TraineeForm = () => {
  const addTrainee = useAddTrainee();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    cohort: '',
    location: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrainee.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setFormData({...formData, first_name: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setFormData({...formData, last_name: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Cohort"
        onChange={(e) => setFormData({...formData, cohort: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Trainee
      </button>
    </form>
  );
};