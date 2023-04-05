import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../hooks/image-url";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
 const { data: genres } = useGenres();
 return (
  <List>
   {genres.map((genre) => (
    <ListItem key={genre.id} paddingY="5px">
     <HStack>
      <Image
       src={getCroppedImageUrl(genre.image_background)}
       boxSize="32px"
       borderRadius={8}
      />
      <Text fontSize="lg">{genre.name}</Text>
     </HStack>
    </ListItem>
   ))}
  </List>
 );
};

export default GenreList;
