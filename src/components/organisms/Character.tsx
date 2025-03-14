import { Button, Card, CardActions, CardContent, CardMedia, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useCharacterSuspenseQuery } from "../../gql/character/queries/character.query.generated";
import { Route as CharacterRoute } from "../../routes/characters/$characterId";

export const Character: FC = () => {
  const characterId = CharacterRoute.useParams().characterId;

  const { data } = useCharacterSuspenseQuery({ variables: { id: characterId } });

  const character = data?.character;

  /**
   * - link to locations
   * - link to episodes
   * - go to episodes
   */

  return (
    <Stack alignItems="center">
      <Card sx={{ width: 500 }}>
        <CardMedia
          component="img"
          alt={`Rick and Morty Image ${characterId}`}
          src={`https://rickandmortyapi.com/api/character/avatar/${characterId}.jpeg`}
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography gutterBottom variant="h5" component="div">
              {`${character?.name} (${character?.species} ${character?.gender})`}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {`Originating from ${character?.origin?.name}, ${character?.name} first appeared in the episode entitled ${character?.episode[0]?.name}.`}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {`${character?.name} is currently ${character?.status} and located in ${character?.location?.name}.`}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small" variant="text">
            View Episodes
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
};
