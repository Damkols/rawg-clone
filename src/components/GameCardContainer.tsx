import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameContainerProps {
 children: ReactNode;
}

const GameCardContainer = ({ children }: GameContainerProps) => {
 return (
  <Box borderRadius={10} overflow="hidden">
   {children}
  </Box>
 );
};

export default GameCardContainer;
