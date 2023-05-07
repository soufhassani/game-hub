import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="blue.500">
        Nav
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
