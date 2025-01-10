import { useApi } from '../../hooks/useApi';

export const ScoreList = () => {
  const { scores } = useApi();
  const { data, isLoading } = scores;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-bold">Scores</h2>
      <div className="grid grid-cols-1 gap-4">
        {data?.results?.map((score) => (
          <div key={score.id} className="bg-white p-4 rounded shadow">
            <h3>Trainee ID: {score.trainee}</h3>
            <p>Total Score: {score.total_score}</p>
            <p>Grade: {score.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};