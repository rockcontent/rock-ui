import * as React from 'react';

import { render } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import { Image } from '../';

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
      <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
    );

    expect(container).not.toBe(null);
    expect(container.getElementsByClassName('chakra-image')).toBeTruthy();

    unmount();
  });
});
