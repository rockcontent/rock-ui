import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Tag, TagCloseButton, TagLabel } from '../';

describe('tag component tests', () => {
  it('Tag (only) renders correctly', () => {
    const { asFragment } = render(<Tag>A</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Tag (only) renders correctly', () => {
    const { getByTestId } = render(<Tag data-testid="tag">A</Tag>);
    expect(getByTestId('tag')).toBeInTheDocument();
  });

  it('Tag with close button renders correctly', () => {
    const { getByTestId } = render(
      <Tag data-testid="tag">
        <TagLabel data-testid="label">B</TagLabel>
        <TagCloseButton aria-label="Close Button" data-testid="close-btn" />
      </Tag>
    );
    expect(getByTestId('tag')).toBeInTheDocument();
    expect(getByTestId('label')).toBeInTheDocument();
    expect(getByTestId('close-btn')).toBeInTheDocument();
    expect(getByTestId('close-btn')).toHaveAttribute('aria-label');
  });
});
