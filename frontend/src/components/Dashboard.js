import { useQuery } from '@tanstack/react-query';
import { fetchScores } from '../services/api';

const Dashboard = () => {
  const { data: scores, isLoading, error } = useQuery({
    queryKey: ['scores'],
    queryFn: fetchScores
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Scores</h2>
          {scores?.data?.results?.slice(0, 5).map((score) => (
            <div key={score.id} className="mb-2">
              <p>{score.trainee} - {score.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;