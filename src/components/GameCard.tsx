import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../hooks/image-url";
import Emoji from "./Emoji";
interface GameProps {
 game: Game;
}

const GameCard = ({ game }: GameProps) => {
 return (
  <Card>
   <Image src={getCroppedImageUrl(game.background_image)} />
   <CardBody>
    <HStack justifyContent="space-between" paddingY="5px" marginBottom={3}>
     <PlatformIconList
      platforms={game.parent_platforms.map((p) => p.platform)}
     />
     <CriticScore score={game.metacritic} />
    </HStack>
    <Heading fontSize="1xl">
     {game.name} <Emoji rating={game.rating_top}></Emoji>
    </Heading>
   </CardBody>
  </Card>
 );
};

export default GameCard;
