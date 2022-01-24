import React, { Component, ErrorInfo, ReactNode } from "react";

import ErrorGeneric from "./ErrorGeneric";

interface Props {
  children: ReactNode;
}

interface State {
  error?: Error;
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { error, hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorGeneric error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
