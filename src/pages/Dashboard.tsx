import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  Box,
  Text,
  Flex,
  Button,
  Tabs,
  Avatar,
  Group,
  ActionIcon,
  Menu,
  Modal,
  TextInput,
} from '@mantine/core';
import { IconSettings, IconCopy } from '@tabler/icons-react';
import USDCABI from './USDC.json';

const SEPOLIA_RPC_URL = "https://sepolia.infura.io/v3/23a20fc28538440eb019569a29bb7339"; // Replace with your Sepolia RPC
const USDC_CONTRACT_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"; // Example USDC address for Sepolia

export default function Dashboard() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState<number | null>(null);
  const [privateKey, setPrivateKey] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [modalOpen, setModalOpen] = useState(false);
  const [newWallet, setNewWallet] = useState<{ address: string; mnemonic?: string; privateKey: string } | null>(null);

  const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
  const usdcContract = new ethers.Contract(USDC_CONTRACT_ADDRESS, USDCABI, provider);

  // Fetch wallet balance
  const fetchWalletBalance = async (address: string) => {
    try {
      const balance = await usdcContract.balanceOf(address);
      const balanceFormatted = ethers.formatUnits(balance, 6);
      setWalletBalance(Number(balanceFormatted));
    } catch (error) {
      console.error("Failed to fetch balance:", error);
      setWalletBalance(null);
    }
  };

  // Import wallet
  const importWallet = async () => {
    try {
      const wallet = new ethers.Wallet(privateKey);
      setWalletAddress(wallet.address);
      await fetchWalletBalance(wallet.address);
      console.log("Wallet imported successfully:", wallet.address);
    } catch (error) {
      console.error("Invalid private key:", error);
      alert("Invalid private key. Please try again.");
    }
  };

  // Create new wallet
  const createNewWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setNewWallet({
      address: wallet.address,
      mnemonic: wallet.mnemonic?.phrase || '',
      privateKey: wallet.privateKey,
    });
    setWalletAddress(wallet.address);
    setWalletBalance(0);
    setModalOpen(true);
  };

  // Copy wallet address
  const copyAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      alert("Address copied!");
    }
  };

  // Register username and wallet address in MongoDB
  const registerUser = async () => {
    if (!username || !walletAddress) {
      alert("Please enter a username and import/create a wallet.");
      return;
    }

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, walletAddress }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register user.");
    }
  };

  // Fetch balance on mount
  useEffect(() => {
    if (walletAddress) {
      fetchWalletBalance(walletAddress);
    }
  }, [walletAddress]);

  return (
    <div style={{ backgroundColor: 'rgba(103, 66, 66, 0.8)', minHeight: '100vh', padding: '20px' }}>
      <Flex justify="center" align="center" direction="column">
        <Text size="xl" mb="20px" style={{ color: 'white', fontWeight: 600 }}>
          Dashboard
        </Text>

        {walletAddress ? (
          <Group justify="center" align="center" mb="20px">
            <Avatar radius="xl" />
            <Text style={{ color: 'white' }}>Wallet Address: {walletAddress}</Text>
            <Text style={{ color: 'white' }}>
              Balance: 
              {walletBalance === null 
                ? "Loading..." 
                : `${walletBalance} USDC`}
            </Text>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon variant="outline" color="blue">
                  <IconSettings />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={copyAddress}>
                  <Flex align="center">
                    <IconCopy size={16} />
                    <Text ml="sm">Copy Address</Text>
                  </Flex>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        ) : (
          <Group justify="center" align="center" mb="20px">
            <TextInput
              placeholder="Enter Private Key"
              value={privateKey}
              onChange={(event) => setPrivateKey(event.currentTarget.value)}
              style={{ width: 300, marginRight: 10 }}
            />
            <Button onClick={importWallet}>Import Wallet</Button>
            <Button onClick={createNewWallet}>Create New Wallet</Button>
          </Group>
        )}

        {walletAddress && (
          <Group justify="center" align="center" mb="20px">
            <TextInput
              placeholder="Enter Username"
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
              style={{ width: 300, marginRight: 10 }}
            />
            <Button onClick={registerUser}>Register User</Button>
          </Group>
        )}

        <Tabs color="blue" defaultValue="deposit" variant="outline">
          <Tabs.List>
            <Tabs.Tab value="deposit">Deposit</Tabs.Tab>
            <Tabs.Tab value="withdraw">Withdraw</Tabs.Tab>
            <Tabs.Tab value="transact">Transact</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="deposit" pt="md">
            <Box style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
              <Text size="lg" color="white" mb="md">Deposit Your Funds</Text>
              {walletAddress ? (
                <Group>
                  <Button onClick={copyAddress} style={{ backgroundColor: '#1a73e8', color: 'white' }}>
                    Copy Wallet Address
                  </Button>
                </Group>
              ) : (
                <Text style={{ color: 'white' }}>Please import or create a wallet to start.</Text>
              )}
            </Box>
          </Tabs.Panel>
        </Tabs>
      </Flex>

      {newWallet && (
        <Modal
          opened={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Your New Wallet"
          centered
          overlayProps={{ opacity: 0.55 }}
        >
          <Text style={{ color: 'black' }}>
            Write down this private key carefully, it gives full access to your wallet.
          </Text>
          <Text size="sm" mt="md" style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
            Private Key: {newWallet.privateKey}
          </Text>
          <Text size="sm" mt="md">
            Wallet Address: {newWallet.address}
          </Text>
          {newWallet.mnemonic && (
            <Text size="sm" mt="md">
              Mnemonic: {newWallet.mnemonic}
            </Text>
          )}
        </Modal>
      )}
    </div>
  );
}
