import { render } from '@testing-library/react';

import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '../';

describe('Popover', () => {
  test('Popover renders correctly', () => {
    const { asFragment } = render(
      <Popover placement="right-start">
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
        </PopoverContent>
        <PopoverFooter>This is the footer</PopoverFooter>
      </Popover>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Popover renders correctly', () => {
    const { asFragment } = render(
      <Popover placement="right-start">
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
        </PopoverContent>
        <PopoverFooter>This is the footer</PopoverFooter>
      </Popover>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
