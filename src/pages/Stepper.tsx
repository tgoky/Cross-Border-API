import { useState } from 'react';
import { Box, Button, TextInput, Text, Flex } from '@mantine/core';

export default function StepperForm() {
  const [step, setStep] = useState(1); // Track the current step

  // Function to go to the next step
  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  // Function to go back to the previous step
  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div style={{ backgroundColor: 'rgba(103, 66, 66, 0.8)', minHeight: '100vh' }}>
      <Flex justify="center" align="center" style={{ height: '50vh' }}>
        <Box
          style={{
            padding: '40px',
            width: '400px',
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
              <TextInput
                placeholder="Phone number"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  padding: '12px',
                  backgroundColor: 'white',
                }}
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
              {/* Sign Up form content */}
              <TextInput
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  padding: '12px',
                  backgroundColor: 'white',
                }}
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

          {/* Additional steps can be added similarly */}
        </Box>
      </Flex>
    </div>
  );
}
