import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatsPage = ({ urls }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>Statistics</Typography>
      {urls.map((u, idx) => (
        <Card key={idx} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="body1">Short: {u.shortcode}</Typography>
            <Typography variant="body2">Clicks: {u.clicks}</Typography>
            <Typography variant="body2">Expiry: {u.expiry}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsPage;
