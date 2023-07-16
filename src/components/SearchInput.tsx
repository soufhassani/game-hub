import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const search = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.current) {
      console.log("search.current.value", search.current.value);
      onSearch(search.current.value);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={search}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
