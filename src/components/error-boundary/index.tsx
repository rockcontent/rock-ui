import React from 'react';

export default class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error) {
    console.warn(error.message);
  }

  render() {
    return this.props.children;
  }
}
