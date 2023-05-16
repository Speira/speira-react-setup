import * as errorContext from "~contexts/ErrorContext";
import useEnsafe from "~hooks/useEnsafe";
import { act, renderHook } from "~utils/testUtils";

test("useEnsafe", () => {
  const setServerError = jest.fn();
  jest
    .spyOn(errorContext, "useError")
    .mockReturnValue(errorContext.createError({ setServerError }));

  const callbacks = {
    default: jest.fn(),
    widhtError: jest.fn().mockImplementation(() => {
      throw new Error("callback failed");
    }),
  };
  const { result: ensafeHook } = renderHook(useEnsafe);

  act(() => {
    const handler = ensafeHook.current.ensafe(callbacks.default);
    expect(callbacks.default).not.toHaveBeenCalled();
    handler();
    expect(callbacks.default).toHaveBeenCalled();
    expect(setServerError).not.toHaveBeenCalled();
  });

  act(() => {
    const faillingHandler = ensafeHook.current.ensafe(callbacks.widhtError);
    expect(callbacks.widhtError).not.toHaveBeenCalled();
    faillingHandler();
    expect(callbacks.widhtError).toHaveBeenCalled();
    expect(setServerError).toHaveBeenCalled();
  });
});
