import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/trainees" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
              Trainees
            </Link>
            <Link to="/scores" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
              Scores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;