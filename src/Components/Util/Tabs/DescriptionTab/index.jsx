import { useState } from 'react';
import Subtitle from "../../subTitle";
import Text from "../../Text";

export default function DescriptionTab(props) {
  const [description, setDesctiption] = useState({
    title: "Description",
    text: `And you know where you were then. Girls were girls and men were men.
        Mister we could use a man like Herbert Hoover again. So get a witch’s
        shawl on a broomstick you can crawl on. Were gonna pay a call on the
        Addams Family.`,
  });
  return (
    <>
      <Subtitle className={`mb-4 text-start blkColor2`}>{description.title}</Subtitle>
      <Text>{description.text}</Text>
    </>
  );
}
