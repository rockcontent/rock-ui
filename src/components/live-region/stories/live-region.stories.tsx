import { Button } from '@chakra-ui/button';
import * as React from 'react';
import { useLiveRegion } from '../index';

export default {
  title: 'Live Region',
};

export function PoliteExample() {
  const region = useLiveRegion();
  return (
    <Button
      onClick={() => {
        region.speak('Filtering categories was successful');
      }}
    >
      Click me
    </Button>
  );
}
