import { GraphQLHandler } from "msw";

const handlerImports = import.meta.glob<{ default: GraphQLHandler }>("./**/*.handler.ts", { eager: true });
const handlers = Object.values(handlerImports).map((handler) => handler.default);

export const getHandlers = (overrides?: GraphQLHandler[]) => {
  if (!overrides) return handlers;

  return handlers.map((handler) => {
    const override = overrides.find((override) => override.info.operationName === handler.info.operationName);

    return override ? override : handler;
  });
};

export default handlers;
