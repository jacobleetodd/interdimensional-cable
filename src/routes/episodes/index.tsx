import { createFileRoute } from "@tanstack/react-router";
import { Episodes } from "../../components/organisms/Episodes";

export const Route = createFileRoute("/episodes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Episodes />;
}
