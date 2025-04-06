
# Task Manager App

A full-stack task management app built with **Next.js**  for Glasgow Credit Union application
The app allows users to manage tasks by adding, completing, and deleting them.

## Features

- **Manage Tasks**: Add, complete, and delete tasks.
- **Responsive UI**: Works on desktop and mobile.
- **Future Backend**: Backend setup for database integration.

## Setup

### Prerequisites

Ensure **Node.js** and **npm** are installed.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Project

To start both the frontend and backend:

```bash
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

For frontend or backend only, use:
- `npm run dev:frontend`
- `npm run dev:backend`

### Formatting

To format code with Prettier:

```bash
npm run format
```

## Project Structure

- **Frontend**: Located in the `frontend` directory, using **Next.js** and **React**.
- **Backend**: Located in the `backend` directory, using **Express** for future database integration.

## Future Enhancements

- **Database integration** for task persistence.
- **User authentication** and additional features.

## License

MIT License - see [LICENSE](LICENSE).
