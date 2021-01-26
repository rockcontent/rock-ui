import React from 'react';
import { Heading as BaseHeading, HeadingProps } from '@chakra-ui/react';

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return <BaseHeading {...props}>{children}</BaseHeading>;
};

export { Heading, HeadingProps };
