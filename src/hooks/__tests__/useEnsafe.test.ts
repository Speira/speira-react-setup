import { useError } from "~contexts/ErrorContext";
import useEnsafe from "~hooks/useEnsafe";
import { act, renderHook } from "~utils/testUtils";

test("useEnsafe", async () => {
  const actionFn = jest.fn();
  const throwFn: jest.Mock<unknown> = jest
    .fn()
    .mockRejectedValue("Async error message");
  const { result: ensafeHook } = renderHook(useEnsafe);
  const { result: errorHook } = renderHook(useError);

  const action = ensafeHook.current.ensafe(actionFn);
  expect(actionFn).not.toHaveBeenCalled();
  action();
  expect(actionFn).toHaveBeenCalled();
  expect(throwFn).not.toHaveBeenCalled();

  const thrown = ensafeHook.current.ensafe(() => {
    throwFn();
  });

  expect(errorHook.current).toEqual(
    expect.objectContaining({ errorMessage: "", hasError: false })
  );
  await thrown();
  expect(errorHook.current).toEqual(
    expect.objectContaining({ errorMessage: "ensafe error", hasError: true })
  );
});
