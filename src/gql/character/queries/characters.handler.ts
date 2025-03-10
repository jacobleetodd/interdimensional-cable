import { fn } from "@storybook/test";
import { HttpResponse } from "msw";
import { createMockCharacter } from "../fragments/character.factory";
import { mockCharactersQuery } from "./characters.query.generated";

const mockCharacter = createMockCharacter();
export const characterSpy = fn();

export const characters = mockCharactersQuery(({ variables }) => {
  characterSpy(variables);

  return HttpResponse.json({
    data: {
      characters: {
        __typename: "Characters",
        results: [mockCharacter],
      },
    },
  });
});

export default characters;
