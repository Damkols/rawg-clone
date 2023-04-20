import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { BsGlobe } from "react-icons/bs";

import {
 FaWindows,
 FaPlaystation,
 FaXbox,
 FaApple,
 FaLinux,
 FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons/lib";

interface PlatformIconProps {
 platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconProps) => {
 const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
 };
 return (
  <HStack marginY={1}>
   {platforms.map((platform) => (
    <Icon
     key={platform.id}
     as={iconMap[platform.slug]}
     color="gray.500
    "
    />
   ))}
  </HStack>
 );
};

export default PlatformIconList;
