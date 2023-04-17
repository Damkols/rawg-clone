import meh from "../assets/meh.webp";
import bullseye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface EmojiProps {
 rating: number;
}
const Emoji = ({ rating }: EmojiProps) => {
 if (rating < 3) return null;

 const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommedned", boxSize: "25px" },
  5: { src: bullseye, alt: "exceptional", boxSize: "25px" },
 };
 return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
