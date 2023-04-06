import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { PlatformProps } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
 onSelectPlatform: (platform: PlatformProps) => void;
 selectedPlatform: PlatformProps | null;
}
const PlatformSelector = ({
 onSelectPlatform,
 selectedPlatform,
}: PlatformSelectorProps) => {
 const { data: platforms, error } = usePlatforms();
 if (error) return null;

 return (
  <Menu>
   <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    {selectedPlatform?.name || "Platform"}
   </MenuButton>
   <MenuList>
    {platforms.map((platform) => (
     <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
      {platform.name}
     </MenuItem>
    ))}
   </MenuList>
  </Menu>
 );
};

export default PlatformSelector;
