import { Stack, TextField, Typography } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid";
import { FC, useMemo, useRef, useState } from "react";
import { useCharactersQuery } from "../../gql/character/queries/characters.query.generated";
import { Route as CharactersRoute } from "../../routes/characters/index";
import { removeFalseyFromArray } from "../../utilities";
import { TableCharacters } from "../molecules/TableCharacters";

export const Characters: FC = () => {
  const navigate = CharactersRoute.useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState<DataGridProps["paginationModel"]>({
    page: 0,
    pageSize: 20,
  });

  const { data, loading } = useCharactersQuery({
    variables: { filter: { name: searchTerm }, page: (paginationModel?.page ?? 0) + 1 },
  });

  const results = data?.characters?.results ?? [];

  const info = data?.characters?.info;

  const rowCountRef = useRef(info?.count ?? 0);

  const rowCount = useMemo(() => {
    if (info?.count !== undefined && info?.count !== null) {
      rowCountRef.current = info.count;
    }
    return rowCountRef.current;
  }, [info?.count]);

  const characters = removeFalseyFromArray(results);

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
      <Typography variant="h4">Characters</Typography>
      <TextField onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by name..." value={searchTerm} />
      <TableCharacters
        characters={characters}
        handlePageChange={handlePageChange}
        loading={loading}
        paginationModel={paginationModel}
        rowCount={rowCount}
      />
    </Stack>
  );
};
