import { Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import * as React from 'react';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '../';

export default {
  title: 'Menu',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <Menu>
    <MenuButton>Actions</MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem as="a" href="#">
        Attend a Workshop
      </MenuItem>
    </MenuList>
  </Menu>
);

export const withDividers = () => (
  <Menu>
    <MenuButton>Actions</MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuDivider />
      <MenuItem>Create a Copy</MenuItem>
      <MenuDivider />
      <MenuItem>Mark as Draft</MenuItem>
      <MenuDivider />
      <MenuItem>Delete</MenuItem>
      <MenuDivider />
      <MenuItem as="a" href="#">
        Attend a Workshop
      </MenuItem>
    </MenuList>
  </Menu>
);

export const accessInternalState = () => (
  <Menu>
    {({ isOpen, onClose }) => (
      <>
        <MenuButton onClick={onClose}>{isOpen ? 'Close' : 'Open'}</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem onClick={() => alert('Kagebunshin')}>
            Create a Copy
          </MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
);

export const searchItems = () => (
  <Menu>
    <MenuButton
      px={4}
      py={2}
      transition="all 0.2s"
      borderRadius="md"
      borderWidth="1px"
      _hover={{ bg: 'gray.100' }}
      _expanded={{ bg: 'red.200' }}
      _focus={{ outline: 0, boxShadow: 'outline' }}
    >
      File
    </MenuButton>
    <MenuList>
      <MenuItem>New File</MenuItem>
      <MenuItem>New Window</MenuItem>
      <MenuDivider />
      <MenuItem>Open...</MenuItem>
      <MenuItem>Save File</MenuItem>
    </MenuList>
  </Menu>
);

export const textWithImages = () => (
  <Menu>
    <MenuButton>Your Cats</MenuButton>
    <MenuList>
      <MenuItem minH="48px">
        <Image
          boxSize="2rem"
          borderRadius="full"
          src="https://placekitten.com/100/100"
          alt="Fluffybuns the destroyer"
          mr="12px"
        />
        <span>Fluffybuns the Destroyer</span>
      </MenuItem>
      <MenuItem minH="40px">
        <Image
          boxSize="2rem"
          borderRadius="full"
          src="https://placekitten.com/120/120"
          alt="Simon the pensive"
          mr="12px"
        />
        <span>Simon the pensive</span>
      </MenuItem>
    </MenuList>
  </Menu>
);

export const menuGroups = () => (
  <Menu>
    <MenuButton>Profile</MenuButton>
    <MenuList>
      <MenuGroup title="Profile">
        <MenuItem>My Account</MenuItem>
        <MenuItem>Payments </MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Help">
        <MenuItem>Docs</MenuItem>
        <MenuItem>FAQ</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);

export const menuOptionGroups = () => (
  <Menu closeOnSelect={false}>
    <MenuButton>Options</MenuButton>
    <MenuList minWidth="240px">
      <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
        <MenuItemOption value="asc">Ascending</MenuItemOption>
        <MenuItemOption value="desc">Descending</MenuItemOption>
      </MenuOptionGroup>
      <MenuDivider />
      <MenuOptionGroup title="Country" type="checkbox">
        <MenuItemOption value="email">Email</MenuItemOption>
        <MenuItemOption value="phone">Phone</MenuItemOption>
        <MenuItemOption value="country">Country</MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
);
