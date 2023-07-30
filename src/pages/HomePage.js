import { Box, Typography } from "@mui/material";
import { pageStyle } from "../styles/styles";

export default function HomePage() {
  return (
    <Box sx={{ my: 4 }} style={pageStyle}>
      <Typography variant="h4" component="h1" gutterBottom>
        React Skills Test
      </Typography>
    </Box>
  );
}
