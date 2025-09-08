import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { logger } from "../utils/logger";
import { isValidUrl, isValidMinutes, isValidShortcode } from "../utils/validators";

const UrlShortenerForm = ({ onShorten }) => {
  const [urls, setUrls] = useState([{ longUrl: "", validity: "", shortcode: "" }]);
  const [errors, setErrors] = useState({});

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const addRow = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: "", validity: "", shortcode: "" }]);
    }
  };

  const validate = () => {
    let hasError = false;
    const newErrors = {};
    urls.forEach((u, idx) => {
      if (!isValidUrl(u.longUrl)) {
        newErrors[idx] = "Invalid URL";
        hasError = true;
      }
      if (u.validity && !isValidMinutes(u.validity)) {
        newErrors[idx] = "Validity must be positive integer";
        hasError = true;
      }
      if (u.shortcode && !isValidShortcode(u.shortcode)) {
        newErrors[idx] = "Shortcode must be alphanumeric (3-15 chars)";
        hasError = true;
      }
    });
    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = () => {
    if (validate()) {
      onShorten(urls);
      logger.info("URLs shortened", { urls });
    } else {
      logger.error("Validation failed", { errors });
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Shorten URLs</Typography>
      {urls.map((u, idx) => (
        <Grid container spacing={2} key={idx} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Long URL"
              value={u.longUrl}
              onChange={(e) => handleChange(idx, "longUrl", e.target.value)}
              error={!!errors[idx]}
              helperText={errors[idx]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Validity (minutes)"
              value={u.validity}
              onChange={(e) => handleChange(idx, "validity", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Custom Shortcode"
              value={u.shortcode}
              onChange={(e) => handleChange(idx, "shortcode", e.target.value)}
            />
          </Grid>
        </Grid>
      ))}
      <Button onClick={addRow} variant="outlined" sx={{ mr: 2 }}>Add Another</Button>
      <Button onClick={handleSubmit} variant="contained">Shorten</Button>
    </div>
  );
};

export default UrlShortenerForm;
