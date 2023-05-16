import React from "react";

import { DefaultProps } from "~utils/types";

export interface ErrorInterface {
  errorMessage?: string;
  errorType?: "client" | "notFound" | "server" | "denied";
  hasError: boolean;
  isClientError: boolean;
  isNotFoundError: boolean;
  isServerError: boolean;
  resetError: () => void;
  setClientError: (message: string) => void;
  setDeniedError: (message: string) => void;
  setNotFountError: (message: string) => void;
  setServerError: (message: string) => void;
}

const ErrorContext = React.createContext<ErrorInterface | null>(null);

export function createError(param: Partial<ErrorInterface>): ErrorInterface {
  const fn = () => {};
  return {
    errorMessage: param.errorMessage || "",
    errorType: param.errorType,
    hasError: param.hasError || false,
    isClientError: param.isClientError || false,
    isNotFoundError: param.isNotFoundError || false,
    isServerError: param.isServerError || false,
    resetError: param.resetError || fn,
    setClientError: param.setClientError || fn,
    setDeniedError: param.setDeniedError || fn,
    setNotFountError: param.setNotFountError || fn,
    setServerError: param.setServerError || fn,
  };
}

/**
 * ErrorProvider
 * @context
 * @description
 * Manages the global errors in the App
 */
function ErrorProvider(props: DefaultProps) {
  const { children } = props;
  const [errorType, setErrorType] =
    React.useState<ErrorInterface["errorType"]>();
  const [errorMessage, setErrorMessage] = React.useState("");
  const value = React.useMemo(
    () =>
      createError({
        errorMessage,
        errorType,
        hasError: !!errorType,
        isClientError: errorType === "client",
        isNotFoundError: errorType === "notFound",
        isServerError: errorType === "server",
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
    [errorType, errorMessage]
  );

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
}

export default ErrorProvider;

export const useError = () => {
  const context = React.useContext(ErrorContext);
  if (!context) throw new Error("useError must be called inside ErrorProvider");
  return context;
};
