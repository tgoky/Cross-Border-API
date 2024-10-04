// Import styles of packages that you've installed
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <MantineProvider >
      <HomePage />
    </MantineProvider>
  );
}
