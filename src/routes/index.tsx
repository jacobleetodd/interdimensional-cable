import { ImageList, ImageListItem, Paper, Stack, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { useCharactersSuspenseQuery } from "../gql/character/queries/characters.query.generated";
import { getRandomInt } from "../utilities";
import { Route as CharacterRoute } from "./characters/$characterId";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = Route.useNavigate();

  const { data } = useCharactersSuspenseQuery();

  const info = data?.characters?.info;

  const count = info?.count ?? 0;

  const imageCount = Array.from({ length: 9 }, (_, i) => i + 1);

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
                      to: CharacterRoute.to,
                      params: { characterId: randomInt.toString() },
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
