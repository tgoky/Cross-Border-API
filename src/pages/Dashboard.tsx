import { Box, Text, Flex, Button, Tabs } from '@mantine/core';

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: 'rgba(103, 66, 66, 0.8)', minHeight: '100vh', padding: '20px' }}>
      <Flex justify="center" align="center" direction="column">
        <Text size="xl" mb="20px" style={{ color: 'white', fontWeight: 600 }}>
          Dashboard
        </Text>

        {/* Tabs for Deposit, Withdraw, and Transact */}
        <Tabs color="blue" defaultValue="deposit" variant="outline">
          <Tabs.List>
            <Tabs.Tab value="deposit">Deposit</Tabs.Tab>
            <Tabs.Tab value="withdraw">Withdraw</Tabs.Tab>
            <Tabs.Tab value="transact">Transact</Tabs.Tab>
          </Tabs.List>

          {/* Deposit Tab */}
          <Tabs.Panel value="deposit" pt="md">
            <Box style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
              <Text size="lg" color="white" mb="md">Deposit Your Funds</Text>
              {/* Implement Deposit Feature Here */}
              <Button style={{ backgroundColor: '#1a73e8', color: 'white', borderRadius: '8px', padding: '12px 20px' }}>
                Deposit
              </Button>
            </Box>
          </Tabs.Panel>

          {/* Withdraw Tab */}
          <Tabs.Panel value="withdraw" pt="md">
            <Box style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
              <Text size="lg" color="white" mb="md">Withdraw Your Funds</Text>
              {/* Implement Withdraw Feature Here */}
              <Button style={{ backgroundColor: '#1a73e8', color: 'white', borderRadius: '8px', padding: '12px 20px' }}>
                Withdraw
              </Button>
            </Box>
          </Tabs.Panel>

          {/* Transact Tab */}
          <Tabs.Panel value="transact" pt="md">
            <Box style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
              <Text size="lg" color="white" mb="md">Transaction Management</Text>
              {/* Implement Transact Feature Here */}
              <Button style={{ backgroundColor: '#1a73e8', color: 'white', borderRadius: '8px', padding: '12px 20px' }}>
                Transact
              </Button>
            </Box>
          </Tabs.Panel>
        </Tabs>
      </Flex>
    </div>
  );
}
