import { CharacterFragment } from "./character.fragment.generated";

const defaultCharacter: CharacterFragment = {
  id: "1",
  name: "Test Character",
  status: "Alive",
  species: "Human",
  type: "Test",
  __typename: "Character",
};

export const createMockCharacter = (overwrites: Partial<CharacterFragment> = {}) => ({
  ...defaultCharacter,
  ...overwrites,
});
