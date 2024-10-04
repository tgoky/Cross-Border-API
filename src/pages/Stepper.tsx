import { useState } from 'react';
import { Box, Button, Text, Flex, TextInput, Radio, Popover } from '@mantine/core';
import { DatePicker } from '@mantine/dates'; // Import DatePicker
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import default styles for phone input

export default function StepperForm() {
  const [step, setStep] = useState(1); // Track the current step
  const [phoneNumber, setPhoneNumber] = useState(''); // Track the phone number input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    sex: '',
    occupation: '',
    address: '',
    state: '',
    email: '',
  });

  const [popoverOpened, setPopoverOpened] = useState(false); // Popover state for DatePicker

  // Function to go to the next step
  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  // Function to go back to the previous step
  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Typing handleInputChange function to handle both string and Date types
  const handleInputChange = (field: keyof typeof formData, value: string | Date) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div style={{ backgroundColor: 'rgba(103, 66, 66, 0.8)', minHeight: '100vh' }}>
      <Flex justify="center" align="center" style={{ height: '80vh' }}>
        <Box
          style={{
            padding: '40px',
            width: '450px', // Increased width for consistency
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          {/* Display the step number */}
          <Text size="lg" mb="md" style={{ color: 'white', fontWeight: 600 }}>
            {`Step ${step}/5`}
          </Text>

          {/* Render different content based on the current step */}
          {step === 1 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                Enter your phone number to get started or login
              </Text>

              {/* Phone Input with Country Selector */}
              <PhoneInput
                country={'ng'} // Default country (Nigeria in this case)
                value={phoneNumber} // Current phone number input
                onChange={(phone) => setPhoneNumber(phone)} // Update phone number state on change
                inputStyle={{
                  width: '100%',
                  borderRadius: '8px',
                  paddingRight: '20px',
                  padding: '12px',
                  backgroundColor: 'white',
                }}
                buttonStyle={{ borderRadius: '8px' }} // Style for country select button
                dropdownStyle={{ borderRadius: '8px' }} // Style for country dropdown
              />
              <Button
                style={{
                  marginTop: '20px',
                  backgroundColor: '#1a73e8',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  width: '100%',
                  fontWeight: 600,
                }}
                onClick={nextStep} // Go to the next step
              >
                Continue
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                Sign Up Form
              </Text>

              {/* First Name */}
              <TextInput
                placeholder="First Name"
                value={formData.firstName}
                onChange={(event) => handleInputChange('firstName', event.currentTarget.value)}
                style={{ marginBottom: '12px' }}
              />

              {/* Last Name */}
              <TextInput
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(event) => handleInputChange('lastName', event.currentTarget.value)}
                style={{ marginBottom: '12px' }}
              />

              {/* Date of Birth (wrapped with Popover) */}
              <Text size="sm" color="white" style={{ marginBottom: '8px' }}>
                Date of Birth
              </Text>
              <Popover
                opened={popoverOpened}
                onClose={() => setPopoverOpened(false)}
                position="bottom"
                withArrow
                width={300}
              >
                <Popover.Target>
                  <TextInput
                    placeholder="Select your date of birth"
                    value={formData.dateOfBirth.toDateString()}
                    onFocus={() => setPopoverOpened(true)}
                    style={{ marginBottom: '12px' }}
                  />
                </Popover.Target>
                <Popover.Dropdown>
                  <DatePicker
                    value={formData.dateOfBirth}
                    onChange={(date) => handleInputChange('dateOfBirth', date || new Date())}
                  />
                </Popover.Dropdown>
              </Popover>

              {/* Sex - improved layout */}
              <Radio.Group
                value={formData.sex}
                onChange={(value) => handleInputChange('sex', value)}
                mb="md" // Consistent margin below
              >
                <Flex justify="space-between" gap="lg"> {/* Align horizontally with gap between them */}
                  <Radio value="male" label="Male" />
                  <Radio value="female" label="Female" />
                </Flex>
              </Radio.Group>

              {/* Occupation */}
              <TextInput
                placeholder="Occupation"
                value={formData.occupation}
                onChange={(event) => handleInputChange('occupation', event.currentTarget.value)}
                style={{ marginBottom: '12px' }}
              />

              {/* Address */}
              <TextInput
                placeholder="Address"
                value={formData.address}
                onChange={(event) => handleInputChange('address', event.currentTarget.value)}
                style={{ marginBottom: '12px' }}
              />

              {/* State */}
              <TextInput
                placeholder="State"
                value={formData.state}
                onChange={(event) => handleInputChange('state', event.currentTarget.value)}
                style={{ marginBottom: '12px' }}
              />

              {/* Email Address */}
              <TextInput
                placeholder="Email Address"
                value={formData.email}
                onChange={(event) => handleInputChange('email', event.currentTarget.value)}
                style={{ marginBottom: '12px' }}
              />

              {/* Navigation Buttons */}
              <Flex justify="space-between" mt="lg">
                <Button
                  onClick={previousStep}
                  variant="outline"
                  style={{
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  style={{
                    backgroundColor: '#1a73e8',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                    fontWeight: 600,
                  }}
                >
                  Continue
                </Button>
              </Flex>
            </>
          )}

          {step === 3 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                KYC Verification
              </Text>
              <Text size="sm" color="white" mb="md">
                Please complete facial verification for KYC.
              </Text>
              {/* Facial Verification Placeholder */}
              <Button
                style={{
                  backgroundColor: '#1a73e8',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  width: '100%',
                  fontWeight: 600,
                }}
                onClick={nextStep} // Go to the next step after verification
              >
                Verify Face
              </Button>
              <Flex justify="space-between" mt="lg">
                <Button
                  onClick={previousStep}
                  variant="outline"
                  style={{
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                  }}
                >
                  Back
                </Button>
              </Flex>
            </>
          )}

          {step === 4 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                ID Verification
              </Text>
              <Text size="sm" color="white" mb="md">
                Please upload your passport or ID for verification.
              </Text>
              {/* File Upload Placeholder */}
              <TextInput
                type="file"
                placeholder="Upload Passport or ID"
                style={{ marginBottom: '12px' }}
              />

              <Button
                style={{
                  backgroundColor: '#1a73e8',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  width: '100%',
                  fontWeight: 600,
                }}
                onClick={nextStep} // Go to the next step after uploading
              >
                Upload ID
              </Button>
              <Flex justify="space-between" mt="lg">
                <Button
                  onClick={previousStep}
                  variant="outline"
                  style={{
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                  }}
                >
                  Back
                </Button>
              </Flex>
            </>
          )}

          {step === 5 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                Verification Complete
              </Text>
              <Text size="sm" color="white" mb="md">
                Thank you for completing the KYC process. You can now proceed to the next steps.
              </Text>

              <Button
                style={{
                  backgroundColor: '#1a73e8',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  width: '100%',
                  fontWeight: 600,
                }}
                onClick={() => alert('Redirecting to the main application...')} // Placeholder for the next action
              >
                Go to Dashboard
              </Button>
            </>
          )}
        </Box>
      </Flex>
    </div>
  );
}
