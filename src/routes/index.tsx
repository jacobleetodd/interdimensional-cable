import { CircularProgress, ImageList, ImageListItem, Paper, Stack, Typography } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import * as React from "react";
import { useCharactersSuspenseQuery } from "../gql/character/queries/characters.query.generated";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = useNavigate();

  const { data } = useCharactersSuspenseQuery();

  const info = data?.characters?.info;

  const count = info?.count ?? 0;

  const imageCount = Array.from({ length: 9 }, (_, i) => i + 1);

  // TODO: util
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <Stack alignItems="center" height="100%" spacing={2}>
      <Typography variant="h3">Welcome to Interdimensional Cable</Typography>
      <ImageList cols={3} gap={8} variant="quilted">
        {imageCount.map((item) => {
          const randomInt = getRandomInt(1, count);
          return (
            <ImageListItem key={item} sx={{ cursor: "pointer" }}>
              <Paper elevation={2} sx={{ borderRadius: 1, overflow: "hidden" }}>
                <img
                  alt={`Rick and Morty Image ${randomInt}`}
                  onClick={() =>
                    navigate({
                      to: `/character/${randomInt}`,
                    })
                  }
                  src={`https://rickandmortyapi.com/api/character/avatar/${randomInt}.jpeg`}
                />
              </Paper>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Stack>
  );
}
