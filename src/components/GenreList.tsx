import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../hooks/image-url";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

interface GenreListProps {
 onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
 const { data: genres, isLoading, error } = useGenres();
 const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

 if (error) return null;
 return (
  <>
   {isLoading &&
    skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
   <List>
    {genres.map((genre) => (
     <ListItem key={genre.id} paddingY="5px">
      <HStack>
       <Image
        src={getCroppedImageUrl(genre.image_background)}
        boxSize="32px"
        borderRadius={8}
       />
       <Button
        onClick={() => onSelectGenre(genre)}
        variant="link"
        fontSize="lg"
       >
        {genre.name}
       </Button>
      </HStack>
     </ListItem>
    ))}
   </List>
  </>
 );
};

export default GenreList;
