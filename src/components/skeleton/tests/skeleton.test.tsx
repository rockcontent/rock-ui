import * as React from 'react';

import { render } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import { SkeletonText } from '../';
import { Box } from '@chakra-ui/react';

let matchMedia: any;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
  console.log(matchMedia);
});

afterEach(() => {
  matchMedia.clear();
});

describe('Test Skeleton component', () => {
  it("Renders without crashing and render it's children", () => {
    const { unmount, container } = render(
      <Box>
        <SkeletonText mt="4" noOfLines={3} spacing="4" />
      </Box>
    );

    const skeletonGroup = container.getElementsByClassName('chakra-skeleton');

    expect(skeletonGroup.length).toBe(3);

    unmount();
  });
});
