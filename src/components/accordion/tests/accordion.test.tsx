import { Box } from '@chakra-ui/layout';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import * as React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '../';

describe('Accordion', () => {
  it('should render accordion', async () => {
    const { asFragment } = render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it('uncontrolled: It opens the accordion panel', () => {
    render(
      <Accordion defaultIndex={0}>
        <AccordionItem>
          <h2>
            <AccordionButton data-testid="button">
              Section 1 title
            </AccordionButton>
          </h2>
          <AccordionPanel data-testid="panel">Panel 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const button = screen.getByTestId('button');

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('uncontrolled: toggles the accordion on click', async () => {
    render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>Trigger</AccordionButton>
          </h2>
          <AccordionPanel>Panel</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText('Trigger');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    // you can't toggle an accordion without passing `allowToggle`
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  // test that arrow up & down moves focus to next/previous accordion
  it('arrow up & down moves focus to next/previous accordion', () => {
    render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>Section 1 title</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>Section 2 title</AccordionButton>
          <AccordionPanel>Panel 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    const first = screen.getByText('Section 1 title');
    const second = screen.getByText('Section 2 title');

    fireEvent.keyDown(first, { key: 'ArrowDown', keyCode: 40 });
    expect(second).toHaveFocus();

    fireEvent.keyDown(second, { key: 'ArrowUp', keyCode: 38 });
    expect(first).toHaveFocus();
  });

  // test that home & end keys moves focus to first/last accordion
  it('home & end keys moves focus to first/last accordion', () => {
    render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>First section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>Second section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>Last section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    const first = screen.getByText('First section');
    const last = screen.getByText('Last section');

    fireEvent.keyDown(first, { key: 'Home', keyCode: 36 });
    expect(first).toHaveFocus();

    fireEvent.keyDown(first, { key: 'End', keyCode: 35 });
    expect(last).toHaveFocus();
  });

  // test the only one accordion can be visible + is not togglable
  it('only one accordion can be visible + is not togglable', () => {
    render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>First section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>Second section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const firstAccordion = screen.getByText('First section');

    fireEvent.click(firstAccordion);
    expect(firstAccordion).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(firstAccordion);
    expect(firstAccordion).toHaveAttribute('aria-expanded', 'true');
  });
  // test the only one accordion can be visible + is togglable
  it('only one accordion can be visible + is togglable', () => {
    render(
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>First section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>Second section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const firstAccordion = screen.getByText('First section');

    fireEvent.click(firstAccordion);
    expect(firstAccordion).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(firstAccordion);
    expect(firstAccordion).toHaveAttribute('aria-expanded', 'false');
  });

  // test that multiple accordions can be opened + is togglable
  it('multiple accordions can be opened + is togglable', () => {
    render(
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>First section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>Second section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const firstAccordion = screen.getByText('First section');
    const secondAccordion = screen.getByText('Second section');

    fireEvent.click(firstAccordion);
    expect(firstAccordion).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(secondAccordion);
    expect(firstAccordion).toHaveAttribute('aria-expanded', 'true');
  });

  // it has the proper aria attributes
  it('has the proper aria attributes', () => {
    render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>Section 1 title</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    const button = screen.getByText('Section 1 title');
    const panel = screen.getByText('Panel 1');

    expect(button).toHaveAttribute('aria-controls');
    expect(button).toHaveAttribute('aria-expanded');
    expect(panel).toHaveAttribute('aria-labelledby');
  });

  // test that tab moves focus to the next focusable element
  test('tab moves focus to the next focusable element', () => {
    render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>First section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>Second section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>Last section</AccordionButton>
          </h2>
          <AccordionPanel>Panel 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    const first = screen.getByText('First section');
    const second = screen.getByText('Second section');
    const last = screen.getByText('Last section');

    fireEvent.click(first);
    waitFor(() => expect(first).toHaveFocus());

    fireEvent.click(second);
    waitFor(() => expect(second).toHaveFocus());

    fireEvent.click(last);
    waitFor(() => expect(last).toHaveFocus());
  });

  // test that aria-contols for button is same as id for panel
  it('aria-contols for button is same as id for panel', () => {
    render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>Section 1 title</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    const button = screen.getByText('Section 1 title');
    const panel = screen.getByText('Panel 1');
    expect(button.getAttribute('aria-controls')).toEqual(
      panel.getAttribute('id')
    );
  });

  // test that aria-expanded is true/false when accordion is open/closed
  it('aria-expanded is true/false when accordion is open/closed', () => {
    render(
      <Accordion defaultIndex={0}>
        <AccordionItem>
          <h2>
            <AccordionButton>Section 1 title</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>Section 2 title</AccordionButton>
          </h2>
          <AccordionPanel>Panel 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const button = screen.getByText('Section 1 title');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  // test that panel has role=region and aria-labelledby
  it('panel has role=region and aria-labelledby', () => {
    render(
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>Section 1 title</AccordionButton>
          </h2>
          <AccordionPanel>Panel 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    const panel = screen.getByText('Panel 1');

    expect(panel).toHaveAttribute('aria-labelledby');
    expect(panel).toHaveAttribute('role', 'region');
  });
});
