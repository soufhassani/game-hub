import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { id: "0", value: "", label: "Relevance" },
    { id: "1", value: "-added", label: "Date added" },
    { id: "2", value: "name", label: "Name" },
    { id: "3", value: "-released", label: "Release date" },
    { id: "4", value: "-metacritic", label: "Popularity" },
    { id: "5", value: "-rating", label: "Average rating" },
  ];

  const currentSort = sortOrders.find((item) => item.value === sortOrder);
  console.log("currentSort", currentSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            key={item.id}
            value={item.value}
            onClick={() => {
              onSelectSortOrder(item.value);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
