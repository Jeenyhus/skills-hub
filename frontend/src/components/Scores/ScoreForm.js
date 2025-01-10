import { useState } from 'react';
import { useApi } from '../../hooks/useApi';

export const ScoreForm = () => {
  const { addScore } = useApi();
  const [formData, setFormData] = useState({
    trainee: '',
    attendance: 0,
    punctuality: 0,
    energy: 0,
    teamwork: 0,
    reliability: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addScore.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        placeholder="Trainee ID"
        onChange={(e) => setFormData({...formData, trainee: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        step="0.1"
        placeholder="Attendance"
        onChange={(e) => setFormData({...formData, attendance: e.target.value})}
        className="w-full p-2 border rounded"
      />
      {/* Add similar inputs for other score fields */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Score
      </button>
    </form>
  );
};