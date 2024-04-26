import { useState, useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaMusic } from "react-icons/fa";

const Index = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("https://api.spotify.com/me/player/currently-playing", {
        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
        },
      });

      const data = await response.json();
      setSongs(data.items);
    };

    fetchSongs();
  }, []);

  return (
    <Flex>
      <Button>
        <FaMusic /> Now Playing
      </Button>
      <Text>{songs.length} songs</Text>
    </Flex>
  );
};

export default Index;
