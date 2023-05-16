import { useError } from "~contexts/ErrorContext";
import { FunctionType } from "~utils/types";

/**
 * useEnsafe
 * @ensafe the use of an asynchronious function
 *
 */
function useEnsafe() {
  const { setServerError } = useError();
  const ensafe =
    (fn: FunctionType<unknown, unknown>) =>
    (...params: unknown[]) => {
      try {
        fn(...params);
      } catch (error: unknown) {
        setServerError(
          "An unexpected problem occured, please contact the developper"
        );
      }
    };
  return { ensafe };
}

export default useEnsafe;
