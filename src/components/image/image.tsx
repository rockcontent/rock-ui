import React, { FC } from 'react';
import {
  Image as BaseImage,
  ImageProps as BaseImageProps,
} from '@chakra-ui/react';

export { BaseImageProps as ImageProps };

export const Image: FC<BaseImageProps> = ({ children, ...props }) => (
  <BaseImage {...props}>{children}</BaseImage>
);
