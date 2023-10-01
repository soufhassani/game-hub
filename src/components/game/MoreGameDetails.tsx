import { Platform } from "../../entities/Platform";
import { Genre } from "../../entities/Genre";
import { Publisher } from "../../entities/Publisher";
import CriticScore from "../CriticScore";
import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
interface Props {
  data: Platform[] | Genre[] | Publisher[] | number;
  term: string;
}

const MoreGameDetails = ({ data, term }: Props) => {
  if (typeof data === "number")
    return (
      <Box marginY={5}>
        <Heading as="dt" fontSize="22px" color="grey">
          {term}
        </Heading>
        <dd>
          <CriticScore score={data} />
        </dd>
      </Box>
    );

  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="22px" color="grey">
        {term}
      </Heading>
      {data.map((d) => (
        <dd key={d.id}>{d.name}</dd>
      ))}
    </Box>
  );
};

export default MoreGameDetails;
