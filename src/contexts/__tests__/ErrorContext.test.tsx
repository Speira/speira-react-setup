import { ErrorInterface, useError } from "~contexts/ErrorContext";
import { act, renderHook } from "~utils/test.utils";

test("ErrorContext", () => {
  const { result } = renderHook<ErrorInterface>(useError);
  expect(result.current).toEqual(
    expect.objectContaining({ errorMessage: "", errorType: undefined })
  );
  expect(result.current).toEqual(
    expect.objectContaining({ errorMessage: "", errorType: undefined })
  );
  act(() => {
    result.current.setClientError("Test Error");
  });
  expect(result.current).toEqual(
    expect.objectContaining({ errorMessage: "Test Error", errorType: "client" })
  );
  act(() => {
    result.current.resetError();
  });
  expect(result.current).toEqual(
    expect.objectContaining({
      errorMessage: "",
      errorType: undefined,
      hasError: false,
    })
  );
  act(() => {
    result.current.setServerError("Test server error");
  });
  expect(result.current).toEqual(
    expect.objectContaining({
      errorMessage: "Test server error",
      errorType: "server",
      hasError: true,
    })
  );
});
