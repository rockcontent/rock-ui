import React from 'react';
import { createIcon } from '@chakra-ui/icon';

export const ExclamationOutlineIcon = createIcon({
  displayName: 'exclamation-outline',
  viewBox: '0 0 16 16',
  path: (
    <>
      <mask id="a" fill="#fff">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 4c0-.55228-.44772-1-1-1s-1 .44772-1 1v5c0 .55228.44772 1 1 1s1-.44772 1-1V4zm0 9c0 .5523-.44772 1-1 1s-1-.4477-1-1 .44772-1 1-1 1 .4477 1 1z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 4c0-.55228-.44772-1-1-1s-1 .44772-1 1v5c0 .55228.44772 1 1 1s1-.44772 1-1V4zm0 9c0 .5523-.44772 1-1 1s-1-.4477-1-1 .44772-1 1-1 1 .4477 1 1z"
        fill="#000"
      />
      <path
        d="M8 5c-.55228 0-1-.44772-1-1h4c0-1.65685-1.34315-3-3-3v4zm1-1c0 .55228-.44772 1-1 1V1C6.34315 1 5 2.34315 5 4h4zm0 5V4H5v5h4zM8 8c.55228 0 1 .44772 1 1H5c0 1.6569 1.34315 3 3 3V8zM7 9c0-.55228.44772-1 1-1v4c1.65685 0 3-1.3431 3-3H7zm0-5v5h4V4H7zm1 12c1.65685 0 3-1.3431 3-3H7c0-.5523.44771-1 1-1v4zm-3-3c0 1.6569 1.34315 3 3 3v-4c.55229 0 1 .4477 1 1H5zm3-3c-1.65685 0-3 1.3431-3 3h4c0 .5523-.44772 1-1 1v-4zm3 3c0-1.6569-1.34315-3-3-3v4c-.55228 0-1-.4477-1-1h4z"
        fill="#000"
        mask="url(#a)"
      />
    </>
  ),
});
