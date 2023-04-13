import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface SearchInputProps {
 onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: SearchInputProps) => {
 return (
  <div>
   <HStack padding="10px">
    <Image src={logo} boxSize="60px" />
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch />
   </HStack>
  </div>
 );
};

export default Navbar;
