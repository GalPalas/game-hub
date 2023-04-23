import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainer {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainer) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
