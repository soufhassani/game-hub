import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../store/Store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQuery((s) => s.setSearchText);
  const search = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.current) {
      setSearchText(search.current.value);
      navigate("/");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ flex: "1" }}>
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
