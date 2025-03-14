import { Stack, TextField, Typography } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid";
import { FC, useMemo, useRef, useState } from "react";
import { useEpisodesQuery } from "../../gql/episode/queries/episodes.generated";
import { Route as EpisodesRoute } from "../../routes/episodes/index";
import { removeFalseyFromArray } from "../../utilities";
import { TableEpisodes } from "../molecules/TableEpisodes";

export const Episodes: FC = () => {
  const navigate = EpisodesRoute.useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState<DataGridProps["paginationModel"]>({
    page: 0,
    pageSize: 20,
  });

  const { data, loading } = useEpisodesQuery({
    variables: { filter: { name: searchTerm }, page: (paginationModel?.page ?? 0) + 1 },
  });

  const results = data?.episodes?.results ?? [];

  const info = data?.episodes?.info;

  const rowCountRef = useRef(info?.count ?? 0);

  const rowCount = useMemo(() => {
    if (info?.count !== undefined && info?.count !== null) {
      rowCountRef.current = info.count;
    }
    return rowCountRef.current;
  }, [info?.count]);

  const episodes = removeFalseyFromArray(results);

  const handlePageChange = (params: DataGridProps["paginationModel"]) => {
    setPaginationModel(params);
    navigate({
      search: {
        paginationModel: JSON.stringify(params),
      },
    });
  };

  return (
    <Stack height="100%" spacing={2}>
      <Typography variant="h4">Episodes</Typography>
      <TextField onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by name..." value={searchTerm} />
      <TableEpisodes
        episodes={episodes}
        handlePageChange={handlePageChange}
        loading={loading}
        paginationModel={paginationModel}
        rowCount={rowCount}
      />
    </Stack>
  );
};
