import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <NavBar />
      <Box as="main" padding={5}>
        {/* <Outlet /> */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games/:slug" element={<GameDetails />} />
          </Routes>
        </AnimatePresence>
      </Box>
    </>
  );
};

export default App;
