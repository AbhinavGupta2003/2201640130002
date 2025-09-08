import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import UrlShortenerForm from "./components/UrlShortenerForm";
import UrlList from "./components/UrlList";
import StatsPage from "./components/StatsPage";

function App() {
  const [urls, setUrls] = useState([]);

  const handleShorten = (entries) => {
    const newUrls = entries.map((u) => {
      const shortcode = u.shortcode || Math.random().toString(36).substring(2, 7);
      const validity = u.validity ? parseInt(u.validity, 10) : 30;
      const expiry = new Date(Date.now() + validity * 60000).toLocaleString();
      return {
        longUrl: u.longUrl,
        shortcode,
        expiry,
        clicks: 0,
        logs: []
      };
    });
    setUrls([...urls, ...newUrls]);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>URL Shortener</Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/stats">Statistics</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={
            <>
              <UrlShortenerForm onShorten={handleShorten} />
              <UrlList urls={urls} />
            </>
          } />
          <Route path="/stats" element={<StatsPage urls={urls} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
