import { useClickable, UseClickableProps } from './use-clickable';
import { Button, HTMLChakraProps } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { Merge } from '@chakra-ui/utils';
import React from 'react';

export type ClickableProps = Merge<
  UseClickableProps,
  HTMLChakraProps<'button'>
>;

export const Clickable: React.FC<ClickableProps> = forwardRef((props, ref) => {
  const clickable = useClickable({ ...props, ref } as any) as HTMLChakraProps<
    'button'
  >;
  return <Button display="inline-flex" {...clickable} />;
});
