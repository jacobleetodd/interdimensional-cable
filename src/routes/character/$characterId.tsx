import { Paper, Stack, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useCharacterSuspenseQuery } from "../../gql/character/queries/character.query.generated";

export const Route = createFileRoute("/character/$characterId")({
  component: RouteComponent,
});

function RouteComponent() {
  const characterId = Route.useParams().characterId;

  const { data } = useCharacterSuspenseQuery({ variables: { id: characterId } });

  const character = data?.character;

  return (
    <Stack alignItems="center" height="100%" spacing={2}>
      <Typography variant="h4">{character?.name}</Typography>
      <Paper elevation={2} sx={{ borderRadius: 1, overflow: "hidden" }}>
        <img
          alt={`Rick and Morty Image ${characterId}`}
          src={`https://rickandmortyapi.com/api/character/avatar/${characterId}.jpeg`}
        />
      </Paper>
    </Stack>
  );
}
