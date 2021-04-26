import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentDidCatch(error: Error) {
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<');
    console.warn(error.message);
  }

  render() {
    return this.props.children;
  }
}
