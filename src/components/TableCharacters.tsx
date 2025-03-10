import { DataGrid, DataGridProps, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useNavigate } from "@tanstack/react-router";
import { FC, useMemo } from "react";
import { CharacterFragment } from "../gql/character/fragments/character.fragment.generated";

interface TableCharactersProps {
  characters: CharacterFragment[];
  handlePageChange: (params: DataGridProps["paginationModel"]) => void;
  loading: boolean;
  paginationModel: DataGridProps["paginationModel"];
  rowCount: number;
}

export const TableCharacters: FC<TableCharactersProps> = ({
  characters,
  handlePageChange,
  loading,
  paginationModel,
  rowCount,
}) => {
  const navigate = useNavigate();

  const columns: GridColDef<CharacterFragment>[] = useMemo(
    () => [
      { field: "name", headerName: "Name", flex: 1, sortable: false },
      { field: "status", headerName: "Status", flex: 0.5, sortable: false },
      { field: "species", headerName: "Species", flex: 0.5, sortable: false },
    ],
    [],
  );

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    navigate({
      to: `/character/${params.id}`,
    });
  };

  return (
    <DataGrid
      columns={columns}
      disableColumnMenu
      loading={loading}
      onPaginationModelChange={handlePageChange}
      onRowClick={handleRowClick}
      paginationMode="server"
      paginationModel={paginationModel}
      rows={characters}
      rowCount={rowCount}
    />
  );
};
