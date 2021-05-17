import React, { FC } from 'react';
import {
  List as BaseList,
  ListProps as BaseListProps,
  ListItem as BaseListItem,
  ListItemProps as BaseListItemProps,
  OrderedList as BaseOrderedList,
  UnorderedList as BaseUnorderedList,
} from '@chakra-ui/react';

export { BaseListProps as ListProps };
export { BaseListItemProps as ListItemProps };
export { BaseListProps as OrderedListProps };
export { BaseListProps as UnorderedListProps };

export const List: FC<BaseListProps> = ({ children, ...props }) => (
  <BaseList {...props}>{children}</BaseList>
);

export const ListItem: FC<BaseListItemProps> = ({ children, ...props }) => (
  <BaseListItem {...props}>{children}</BaseListItem>
);

export const OrderedList: FC<BaseListProps> = ({ children, ...props }) => (
  <BaseOrderedList {...props}>{children}</BaseOrderedList>
);

export const UnorderedList: FC<BaseListProps> = ({ children, ...props }) => (
  <BaseUnorderedList {...props}>{children}</BaseUnorderedList>
);
