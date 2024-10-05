// Import styles of packages that you've installed
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import HomePage from './pages/HomePage'; // Adjust the import path as necessary
import Dashboard from './pages/Dashboard'; // Import your Dashboard component

export default function App() {
  return (
    <MantineProvider>
      <Router> {/* Wrap your application with Router */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
          {/* Add more routes here as your app grows */}
        </Routes>
      </Router>
    </MantineProvider>
  );
}
