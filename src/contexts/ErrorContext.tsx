import React from "react";

import { getErrorsTypes } from "~utils/errors";
import { DefaultProps } from "~utils/types";

export interface ErrorInterface {
  errorMessage?: string;
  errorType?: "client" | "notFound" | "server" | "denied";
  hasError: boolean;
  isClientError: boolean;
  isNotFoundError: boolean;
  isServerError: boolean;
  resetError: (message: string) => void;
  setClientError: (message: string) => void;
  setDeniedError: (message: string) => void;
  setNotFountError: (message: string) => void;
  setServerError: (message: string) => void;
}

const ErrorContext = React.createContext<ErrorInterface | null>(null);

/**
 * ErrorProvider
 * @context
 */
function ErrorProvider(props: DefaultProps) {
  const { children } = props;
  const [errorType, setErrorType] =
    React.useState<ErrorInterface["errorType"]>();
  const [errorMessage, setErrorMessage] = React.useState("");
  const errorsTypes = getErrorsTypes();
  const value = React.useMemo(
    () => ({
      errorMessage,
      errorType,
      hasError: !!errorType,
      isClientError: errorType === errorsTypes.client,
      isNotFoundError: errorType === errorsTypes.notFound,
      isServerError: errorType === errorsTypes.server,
      resetError() {
        setErrorType(undefined);
        setErrorMessage("");
      },
      setClientError(message: string) {
        setErrorType("client");
        setErrorMessage(message);
      },
      setDeniedError(message: string) {
        setErrorType("denied");
        setErrorMessage(message);
      },
      setNotFountError(message: string) {
        setErrorType("notFound");
        setErrorMessage(message);
      },
      setServerError(message: string) {
        setErrorType("server");
        setErrorMessage(message);
      },
    }),
    [errorType, errorMessage, errorsTypes]
  );

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
}

export default ErrorProvider;

export const useError = () => {
  const context = React.useContext(ErrorContext);
  if (!context) throw new Error("ErrorContext must be called in ErrorProvider");
  return context;
};
