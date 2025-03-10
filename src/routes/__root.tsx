import { ApolloProvider } from "@apollo/client";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React, { Suspense } from "react";
import { client } from "../../client";
import { PageLoading } from "../components/PageLoading";
import { Template } from "../templates/Template";
import DefaultThemeProvider from "../theme/DefaultThemeProvider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Template>
      <ApolloProvider client={client}>
        <DefaultThemeProvider>
          <Suspense fallback={<PageLoading />}>
            <Outlet />
          </Suspense>
        </DefaultThemeProvider>
      </ApolloProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </Template>
  );
}
