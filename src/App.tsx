import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="#181818">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blue.500">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue.500">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
