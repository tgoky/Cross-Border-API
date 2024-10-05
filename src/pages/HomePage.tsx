import { Box, Flex, Button, Menu, Text, Modal } from '@mantine/core';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import Typical from 'react-typical';
import Stepper from './Stepper'; // Import the Stepper component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './home.css';

const countries = [
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
];

export default function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [modalOpened, setModalOpened] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null); // Set initial state for hoveredCountry
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleCountryChange = (country: { name: string; code: string; flag: string }) => {
    setSelectedCountry(country);
    setModalOpened(false); // Close modal after selecting country
  };

  const goToDashboard = () => {
    navigate('/dashboard'); // Navigate to Dashboard
  };

  // Define the onComplete function to handle the completion of the stepper
  const handleComplete = () => {
    console.log('Stepper completed!');
    goToDashboard(); // Optionally navigate to the dashboard on completion
  };

  return (
    <div style={{ backgroundColor: 'rgba(103, 66, 66, 0.8)', position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: 'rgba(103, 66, 66, 0.8)',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Left side (Country Dropdown) */}
        <Button
          variant="outline"
          style={{ color: 'white', display: 'flex', alignItems: 'center', borderRadius: '20px' }}
          onClick={() => setModalOpened(true)}
        >
          <span style={{ marginRight: 5 }}>{selectedCountry.flag}</span>
          <Text>{selectedCountry.name}</Text>
          <IconChevronDown size={16} style={{ marginLeft: 5 }} />
        </Button>

        {/* Right side (Menus) */}
        <Flex gap="md">
          {/* Products Menu */}
          <Menu trigger="hover" width="100%">
            <Menu.Target>
              <Button variant="subtle" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                Products <IconChevronDown size={16} style={{ marginLeft: 5 }} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Cross Border Transfers & Payments</Text>
                <Text size="xs" color="dimmed">
                  Send money internationally to more than 21+ countries at low fees and great rates.
                </Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Global Accounts</Text>
                <Text size="xs" color="dimmed">
                  Open swift global accounts to receive, hold, and send funds across different currencies.
                </Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Request Money</Text>
                <Text size="xs" color="dimmed">
                  Send money requests or share a payment link for quick settlements.
                </Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {/* Company Menu */}
          <Menu trigger="hover" width="100%">
            <Menu.Target>
              <Button variant="subtle" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                Company <IconChevronDown size={16} style={{ marginLeft: 5 }} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>About Us</Text>
                <Text size="xs" color="dimmed">Learn more about our mission and team.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Careers</Text>
                <Text size="xs" color="dimmed">Explore open roles and join our team.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Press</Text>
                <Text size="xs" color="dimmed">Check out our latest news and announcements.</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {/* Support Menu */}
          <Menu trigger="hover" width="100%">
            <Menu.Target>
              <Button variant="subtle" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                Support <IconChevronDown size={16} style={{ marginLeft: 5 }} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Help Center</Text>
                <Text size="xs" color="dimmed">Find answers to common questions and issues.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Contact Us</Text>
                <Text size="xs" color="dimmed">Get in touch with our support team.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Community Forum</Text>
                <Text size="xs" color="dimmed">Join the conversation with our user community.</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {/* Community Menu */}
          <Menu trigger="hover" width="100%">
            <Menu.Target>
              <Button variant="subtle" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                Community <IconChevronDown size={16} style={{ marginLeft: 5 }} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Developers</Text>
                <Text size="xs" color="dimmed">Explore our API and developer resources.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Blog</Text>
                <Text size="xs" color="dimmed">Read the latest updates from our community.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Partners</Text>
                <Text size="xs" color="dimmed">Join our partner ecosystem and grow together.</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Box>

      {/* Typing effect for introducing blocks */}
      <div className="dd">
        <Typical
          loop={Infinity}
          wrapper="p"
          steps={[
            'Open multi-currency accounts.', 2000,
            'Send and receive money globally.', 2000,
            '', 1000,
          ]}
        />
      </div>

      {/* Render Stepper component and pass onComplete */}
      <Stepper onComplete={handleComplete} />

      {/* Button to navigate to Dashboard */}
      <Button
        onClick={goToDashboard} // Navigate to Dashboard on click
        style={{
          marginTop: '20px',
          color: 'white',
          backgroundColor: 'green',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Go to Dashboard
      </Button>

      {/* Country selection modal */}
      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Select a Country">
        {countries.map((country) => (
          <Button
            key={country.code}
            onClick={() => handleCountryChange(country)}
            onMouseEnter={() => setHoveredCountry(country.name)}
            onMouseLeave={() => setHoveredCountry(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '5px 0',
              backgroundColor: hoveredCountry === country.name ? 'rgba(255, 255, 255, 0.2)' : 'transparent', // Highlight on hover
              color: 'white',
              width: '100%',
            }}
          >
            <Text>
              {country.flag} {country.name}
            </Text>
            <Text size="sm" color="dimmed">
              {country.code}
            </Text>
          </Button>
        ))}
      </Modal>
    </div>
  );
}
