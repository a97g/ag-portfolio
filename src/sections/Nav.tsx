import React from "react";
import { Box } from "@mui/material";
import GooeyNav from "../components/GooeyNav";
import GlassSurface from "../components/GlassSurface";

const items = [
  { label: "Home", href: "#Home" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Contact", href: "#Contact" },
];

export const Nav: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 20,
          left: 0,
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          zIndex: 1000,
          "@media (max-width:800px)": { display: "none" },
        }}
      >
        <GlassSurface width={550} height={70} borderRadius={24}>
          <GooeyNav
            items={items}
            particleCount={50}
            particleDistances={[90, 10]}
            particleR={700}
            initialActiveIndex={0}
            animationTime={300}
            timeVariance={1000}
            colors={[5, 2, 3, 1, 2, 3, 1, 4]}
          />
        </GlassSurface>
      </Box>
    </>
  );
};

export default Nav;
