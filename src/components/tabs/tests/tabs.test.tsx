import { render } from '@testing-library/react';
import * as React from 'react';
import { TabList, Tab, Tabs, TabPanel, TabPanels } from '../';

test('Tabs renders correctly', () => {
  const { asFragment } = render(
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
  expect(asFragment()).toMatchSnapshot();
});
