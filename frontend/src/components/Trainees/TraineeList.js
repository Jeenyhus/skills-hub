import { useTrainees } from '../../hooks/useApi';

export const TraineeList = () => {
  const { data, isLoading } = useTrainees();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-bold">Trainees</h2>
      <div className="grid grid-cols-1 gap-4">
        {data?.results?.map((trainee) => (
          <div key={trainee.id} className="bg-white p-4 rounded shadow">
            <h3>{trainee.first_name} {trainee.last_name}</h3>
            <p>Cohort: {trainee.cohort}</p>
          </div>
        ))}
      </div>
    </div>
  );
};