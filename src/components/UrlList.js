import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UrlList = ({ urls }) => {
  return (
    <div>
      {urls.map((u, idx) => (
        <Card key={idx} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="body1">Original: {u.longUrl}</Typography>
            <Typography variant="body2">Short: http://localhost:3000/{u.shortcode}</Typography>
            <Typography variant="body2">Expires: {u.expiry}</Typography>
            <Typography variant="body2">Clicks: {u.clicks}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UrlList;
