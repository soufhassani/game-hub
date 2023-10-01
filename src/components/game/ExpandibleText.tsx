import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandibleText = ({ children }: Props) => {
  const [expandible, setExpandible] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const newChild = expandible ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {newChild}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft="10px"
        onClick={() => setExpandible(!expandible)}
      >
        {expandible ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandibleText;
