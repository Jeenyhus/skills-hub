# Skills Hub

Skills Hub is a web application designed to track and visualize trainee performance metrics, replacing spreadsheet-based tracking with an interactive and filterable dashboard. It supports grading, visualization, and detailed reports, empowering users to analyze and manage trainee data efficiently.

## Features

- **Grade Distribution**: View graphical representations of trainee grades based on a customizable grading system.
- **Metric Analysis**: Evaluate trainees’ scores on metrics such as Attendance, Punctuality, Energy, Reliability, Teamwork, Timetable, and Numeracy Progress.
- **Individual Reports**: Drill down into individual trainee performance.
- **Filterable Dashboard**: Quickly filter data by location, cohort, or specific metrics.
- **Comprehensive Grading**: Automatically compute grades based on predefined ranges.
- **Mobile-Friendly Design**: Accessible on both desktop and mobile devices.

## Tech Stack

### Frontend

- **React.js**: Dynamic UI with reusable components.
- **Chart.js**: Interactive data visualization.
- **Bootstrap 5**: Responsive design.

### Backend

- **Django**: Robust backend with RESTful APIs.
- **Django REST Framework**: Simplified API development.
- **PostgreSQL**: Relational database for storing trainee data.

### DevOps

- **Docker**: Containerization for streamlined development and deployment.
- **GitHub Actions**: CI/CD for automated testing and deployment.

## Getting Started

### Prerequisites

- Python 3.10 or higher
- Node.js 18 or higher
- PostgreSQL (or SQLite for local development)
- Git

### Setup Instructions

1. **Clone the Repository**

    ```sh
    git clone git@github.com:Jeenyhus/skills-hub.git
    cd skills_hub
    ```

2. **Set Up the Backend**

    1. Navigate to the backend directory:

        ```sh
        cd backend
        ```

    2. Create a virtual environment and activate it:

        ```sh
        python3 -m venv venv
        source venv/bin/activate  # For Linux/macOS
        # venv\Scripts\activate   # For Windows
        ```

    3. Install dependencies:

        ```sh
        pip install -r requirements.txt
        ```

    4. Run migrations:

        ```sh
        python manage.py makemigrations
        python manage.py migrate
        ```

    5. Start the development server:

        ```sh
        python manage.py runserver
        ```

3. **Set Up the Frontend**

    1. Navigate to the frontend directory:

        ```sh
        cd ../frontend
        ```

    2. Install Node.js dependencies:

        ```sh
        npm install
        ```

    3. Start the development server:

        ```sh
        npm start
        ```

## Project Structure

```plaintext
skills_hub/
├── backend/                # Django backend
│   ├── skills_hub/         # Django project folder
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── api/                # Django app for APIs
│   ├── manage.py
│   └── requirements.txt
├── frontend/               # React.js frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API integrations
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── README.md
├── .gitignore
├── README.md               # Project overview
└── docker-compose.yml      # Docker configuration
```

## How to Use

1. Access the web app at [http://127.0.0.1:3000/](http://127.0.0.1:3000/).
2. Use the dashboard to:
    - View grade distribution.
    - Analyze trainee metrics.
    - Drill down into individual reports.
3. Filter data by location or cohort to customize views.

## API Endpoints

**Base URL**: `/api/v1`

1. **Trainee Data**
    - `GET /trainees/`: Fetch all trainees.
    - `GET /trainees/<id>/`: Fetch details of a specific trainee.

2. **Metrics**
    - `POST /metrics/`: Add or update trainee metrics.

## Contributing

1. Fork the repository.
2. Create a new branch:

    ```sh
    git checkout -b feature/your-feature-name
    ```

3. Commit your changes:

    ```sh
    git commit -m "Add your message"
    ```

4. Push the branch:

    ```sh
    git push origin feature/your-feature-name
    ```

5. Open a pull request.

## Roadmap

- Add user authentication (admin and trainee roles).
- Implement dynamic cohort management.
- Enhance visualizations with more chart types.
- Add export options (CSV, PDF).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

## Contact

For questions or feedback, reach out to Dabwitso Mweemba at [dmweemba@edulution.org](mailto:dmweemba@edulution.org).