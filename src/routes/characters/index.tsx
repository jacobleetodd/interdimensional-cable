import { createFileRoute } from "@tanstack/react-router";
import { Characters } from "../../components/organisms/Characters";

export const Route = createFileRoute("/characters/")({
  component: RouteComponent,
  // validateSearch: (search) => {
  //   const paginationModel = search.paginationModel;
  //   if (!paginationModel) return { paginationModel: undefined };
  //   // TODO: make this better, zod?
  //   return {
  //     paginationModel:
  //       typeof paginationModel === "string" ? JSON.parse(search.paginationModel as string) : paginationModel,
  //   };
  // },
});

function RouteComponent() {
  return <Characters />;
}
