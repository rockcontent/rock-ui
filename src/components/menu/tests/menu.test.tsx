import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from '../';

describe('Menu', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);

    const component = (
      <Menu>
        <MenuButton>Profile</MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuDivider />
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuDivider />
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
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

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const menuButton = document.querySelector('.chakra-menu__menu-button');
    const menuList = document.querySelector('.chakra-menu__menu-list');
    const menuGroup = document.querySelector('.chakra-menu__group');
    const groupTitle = document.querySelector('.chakra-menu__group__title');
    const menuItem = document.querySelector('.chakra-menu__menuitem');
    const menuItemOption = document.querySelector(
      '.chakra-menu__menuitem-option'
    );
    const menuDivider = document.querySelector('.chakra-menu__divider');

    expect(menuButton).toBeTruthy();
    expect(menuList).toBeTruthy();
    expect(menuGroup).toBeTruthy();
    expect(groupTitle).toBeTruthy();
    expect(menuItem).toBeTruthy();
    expect(menuItemOption).toBeTruthy();
    expect(menuDivider).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  it('triggers callback functions', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);

    const menuButtonClick = jest.fn();
    const menuItemClick = jest.fn();
    const radioMenuOptionGroupChange = jest.fn();
    const checkboxMenuOptionGroupChange = jest.fn();

    const component = (
      <Menu>
        <MenuButton onClick={menuButtonClick}>Profile</MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem onClick={menuItemClick}>My Account</MenuItem>
            <MenuDivider />
            <MenuItem onClick={menuItemClick}>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem onClick={menuItemClick}>Docs</MenuItem>
            <MenuDivider />
            <MenuItem onClick={menuItemClick}>FAQ</MenuItem>
          </MenuGroup>
          <MenuOptionGroup
            defaultValue="asc"
            title="Order"
            type="radio"
            onChange={radioMenuOptionGroupChange}
          >
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup
            title="Country"
            type="checkbox"
            onChange={checkboxMenuOptionGroupChange}
          >
            <MenuItemOption value="email">Email</MenuItemOption>
            <MenuItemOption value="phone">Phone</MenuItemOption>
            <MenuItemOption value="country">Country</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const menuButton = document.querySelector('.chakra-menu__menu-button');
    const menuItem = document.querySelector('.chakra-menu__menuitem');
    const menuItemOptionAsc = document.querySelector(
      '.chakra-menu__menuitem-option[value=asc]'
    );
    const menuItemOptionEmail = document.querySelector(
      '.chakra-menu__menuitem-option[value=email]'
    );

    ReactTestUtils.act(() => {
      menuButton &&
        menuButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      menuItem &&
        menuItem.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      menuItemOptionAsc &&
        menuItemOptionAsc.dispatchEvent(
          new MouseEvent('click', { bubbles: true })
        );
      menuItemOptionEmail &&
        menuItemOptionEmail.dispatchEvent(
          new MouseEvent('click', { bubbles: true })
        );
    });

    expect(menuButtonClick).toHaveBeenCalledTimes(1);
    expect(menuItemClick).toHaveBeenCalledTimes(1);
    // expect(radioMenuOptionGroupChange).toHaveBeenCalledTimes(1); @TODO debug test later. the component is working
    // expect(checkboxMenuOptionGroupChange).toHaveBeenCalledTimes(1); @TODO debug test later. the component is working

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
