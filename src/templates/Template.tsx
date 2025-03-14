import { Grid2, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { FC, PropsWithChildren } from "react";
import { Route as CharactersRoute } from "../routes/characters/index";
import { Route as EpisodesRoute } from "../routes/episodes/index";

export const Template: FC<PropsWithChildren> = ({ children }) => (
  <Grid2 container height="100%">
    <Grid2
      size={3}
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <List disablePadding>
        <ListItem>
          <Typography color="common.white" fontWeight="bold" variant="h4">
            Interdimensional Cable
          </Typography>
        </ListItem>
        <ListItemButton
          activeOptions={{ exact: true }}
          activeProps={{ className: "font-bold" }}
          component={Link}
          sx={{ color: "common.white" }}
          to="/"
        >
          Home
        </ListItemButton>
        <ListItemButton
          activeOptions={{ includeSearch: true }}
          activeProps={{ className: "font-bold" }}
          component={Link}
          sx={{ color: "common.white" }}
          to={CharactersRoute.to}
        >
          Characters
        </ListItemButton>
        <ListItemButton
          activeOptions={{ includeSearch: true }}
          activeProps={{ className: "font-bold" }}
          component={Link}
          sx={{ color: "common.white" }}
          to={EpisodesRoute.to}
        >
          Episodes
        </ListItemButton>
      </List>
    </Grid2>
    <Grid2 height="100vh" p={8} size={9}>
      {children}
    </Grid2>
  </Grid2>
);
