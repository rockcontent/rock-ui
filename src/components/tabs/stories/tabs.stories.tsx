import React from 'react';
import { useColorModeValue, Image } from '@chakra-ui/react';
import { Box, Container, Stack } from '@chakra-ui/layout';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../';

export default {
  title: 'Tabs',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const variantsAndColor = () => (
  <Stack direction="column" spacing={3}>
    <Tabs variant="enclosed">
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

    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
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
  </Stack>
);

export const tabSizes = () => (
  <Tabs size="md" variant="enclosed">
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

export const tabAlignment = () => (
  <Tabs align="end" variant="enclosed">
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

export const filledTabs = () => (
  <Tabs isFitted variant="enclosed">
    <TabList mb="1em">
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

export const styledViaProps = () => (
  <Tabs variant="unstyled">
    <TabList>
      <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
      <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
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

export const TabsOnChange: React.FC = () => {
  const colors = useColorModeValue(
    ['red.50', 'teal.50', 'blue.50'],
    ['red.300', 'teal.300', 'blue.300']
  );
  const [tabIndex, setTabIndex] = React.useState(0);
  const bg = colors[tabIndex];

  return (
    <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab>Red</Tab>
        <Tab>Teal</Tab>
        <Tab>Blue</Tab>
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>The Primary Colors</TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const tabInitiallyActive = () => (
  <Tabs defaultIndex={1}>
    <TabPanels>
      <TabPanel>
        <Image
          boxSize="200px"
          fit="cover"
          src="https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA"
        />
      </TabPanel>
      <TabPanel>
        <Image
          boxSize="200px"
          fit="cover"
          src="https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170716092103"
        />
      </TabPanel>
    </TabPanels>
    <TabList>
      <Tab>Naruto</Tab>
      <Tab>Sasuke</Tab>
    </TabList>
  </Tabs>
);

export const disabledTab = () => (
  <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab isDisabled>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>1</TabPanel>
      <TabPanel>2</TabPanel>
      <TabPanel>3</TabPanel>
    </TabPanels>
  </Tabs>
);

export const manualActivation = () => (
  <Tabs isManual variant="enclosed">
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

export const lazilyMounting = () => (
  <Tabs isLazy>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
    </TabList>
    <TabPanels>
      {/* initially mounted */}
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      {/* initially not mounted */}
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const ControlledTabs: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Box>
      <input
        type="range"
        min="0"
        max="2"
        value={tabIndex}
        onChange={handleSliderChange}
      />

      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Click the tabs or pull the slider around</p>
          </TabPanel>
          <TabPanel>
            <p>Yeah yeah. What's up?</p>
          </TabPanel>
          <TabPanel>
            <p>Oh, hello there.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export const dataTabs = () => {
  // 1. Create the component
  function DataTabs({ data }: any) {
    return (
      <Tabs>
        <TabList>
          {data.map((tab: any, index: number) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab: any, index: number) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }

  // 2. Create an array of data
  const tabData = [
    {
      label: 'Nigerian Jollof',
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      label: 'Pounded Yam & Egusi',
      content:
        'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
  ];

  // 3. Pass the props and chill!
  return <DataTabs data={tabData} />;
};
