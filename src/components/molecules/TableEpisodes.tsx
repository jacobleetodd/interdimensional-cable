import { DataGrid, DataGridProps, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { FC, useMemo } from "react";
import { EpisodeFragment } from "../../gql/episode/fragments/episode.fragment.generated";
import { Route as EpisodeRoute } from "../../routes/episodes/$episodeId";
import { Route as EpisodesRoute } from "../../routes/episodes/index";

interface TableEpisodesProps {
  episodes: EpisodeFragment[];
  handlePageChange: (params: DataGridProps["paginationModel"]) => void;
  loading: boolean;
  paginationModel: DataGridProps["paginationModel"];
  rowCount: number;
}

export const TableEpisodes: FC<TableEpisodesProps> = ({
  episodes,
  handlePageChange,
  loading,
  paginationModel,
  rowCount,
}) => {
  const navigate = EpisodesRoute.useNavigate();

  const columns: GridColDef<EpisodeFragment>[] = useMemo(
    () => [
      { field: "name", headerName: "Name", flex: 1, sortable: false },
      { field: "air_date", headerName: "Air Date", flex: 0.5, sortable: false },
    ],
    [],
  );

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    navigate({
      to: EpisodeRoute.to,
      params: { episodeId: params.row.id },
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
      pageSizeOptions={[20]}
      rows={episodes}
      rowCount={rowCount}
    />
  );
};
