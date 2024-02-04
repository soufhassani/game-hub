import { useParams } from "react-router-dom";
import { Box, Heading, Image, ImageProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TheGame from "../components/game/TheGame";
import { useGameStore, uselinkState } from "../store/Store";

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const GameDetails = () => {
  const { slug } = useParams();
  const isFromHome = uselinkState((s) => s.state.fromHome);
  const game = useGameStore((s) => s.game);

  const image = game.background_image;
  const title = game.title;

  const MotionImage = motion<Omit<ImageProps, "transition">>(Image);

  const initialImageAnimation = {
    height: isFromHome ? game.height : "400px",
    width: isFromHome ? game.width : "100%",
    y: isFromHome ? game.y! - (64.33 + 17) : "0", // (64.33 is for header height + 10 for Parent div padding)
    x: isFromHome ? game.x! - 17 : "0", // (10 for Parent div padding)
    left: isFromHome ? game.left! : "auto",
  };

  const toAnimation = {
    height: "400px",
    width: "100%",
    y: 0,
    x: 0,
    transition: { delay: 0.2, ...transition },
  };

  const fromHome = isFromHome;

  return (
    <>
      <Box as={motion.div} initial="initial" animate="animate" exit="exit">
        {isFromHome && (
          <Box marginBottom={10} position="relative">
            <MotionImage
              as={motion.img}
              initial={initialImageAnimation}
              animate={toAnimation}
              exit={initialImageAnimation}
              src={image}
              objectFit="cover"
              align="top"
              filter="grayscale(80%) brightness(60%) contrast(150%)"
            />
            <Heading
              as="h2"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              {title}
            </Heading>
          </Box>
        )}

        <TheGame slug={slug} isFromHome={fromHome} />
      </Box>
    </>
  );
};

export default GameDetails;
