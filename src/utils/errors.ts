export interface ErrorInterface {
  errorType?: "client" | "notFound" | "server" | "denied";
  errorMessage?: string;
}

export function getErrorsTypes() {
  return {
    client: "client",
    server: "server",
    notFound: "notFound",
  };
}
