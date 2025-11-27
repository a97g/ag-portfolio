import React from "react";
import { Box } from "@mui/material";
import DarkVeil from "../components/DarkVeil";
import DotGrid from "../components/DotGrid";

export const Nav: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <DarkVeil />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#101010"
          activeColor="white"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{ backgroundColor: "transparent" }}
        />
      </Box>
    </>
  );
};

export default Nav;
