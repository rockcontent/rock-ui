import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import { Link } from '../';

describe("Test Link", () => {
    it('Renders without crashing and has the correct href link', () => {
        const component = <Link href="https://rockcontent.com/" isExternal>Rock Content</Link>;

        const { getByText, unmount } = render(component);
        const linkElement = getByText('Rock Content');
        const href = linkElement.getAttribute('href');

        expect(linkElement).toBeDefined();
        expect(href).toBe('https://rockcontent.com/');

        unmount();
    })
})