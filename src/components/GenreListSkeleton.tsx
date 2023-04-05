import {
 Card,
 CardBody,
 HStack,
 Skeleton,
 SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
 return (
  <Card>
   <HStack>
    <Skeleton height="32px" boxSize="32px" borderRadius={8} />
    <SkeletonText />
   </HStack>
  </Card>
 );
};

export default GenreListSkeleton;
