import "./App.css";
import Header from "../src/components/Header";
import Initialize from "../src/components/initialize";
import { useState } from "react";
import { Container } from "@mui/material";
import Mint from "./components/Mint";
export default function App() {
  const [isConnected, setConnected] = useState(false);
  return (
    <div className="App">
      <Header
        onConnected={() => setConnected(true)}
        onDisconnected={() => setConnected(false)}
      />

      <Container sx={{ mt: 15 }}>
        {isConnected && <Initialize />}
        {isConnected && <Mint />}
      </Container>
    </div>
  );
}
