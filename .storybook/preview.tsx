import { ApolloProvider } from "@apollo/client";
import type { Preview } from "@storybook/react";
import React, { Suspense } from "react";
import { client } from "../client";
import { PageLoading } from "../src/components/atoms/PageLoading";
import { DefaultThemeProvider } from "../src/theme/DefaultThemeProvider";

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <DefaultThemeProvider>
          <ApolloProvider client={client}>
            <Suspense fallback={<PageLoading />}>
              <Story />
            </Suspense>
          </ApolloProvider>
        </DefaultThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
