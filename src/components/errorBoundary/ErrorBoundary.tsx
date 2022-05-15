import React, { ErrorInfo } from 'react';
import ErrorBoundaryPage from '../../pages/errorBoundary/ErrorBoundaryPage';

interface IProps {
  children: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('error: ', error);
    console.log('errorInfo: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
