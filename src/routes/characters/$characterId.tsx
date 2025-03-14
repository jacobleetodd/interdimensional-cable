import { createFileRoute } from "@tanstack/react-router";
import { Character } from "../../components/organisms/Character";

export const Route = createFileRoute("/characters/$characterId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Character />;
}
