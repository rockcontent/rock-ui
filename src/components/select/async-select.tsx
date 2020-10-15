import React, { FC } from 'react';
import BaseAsyncSelect, { AsyncProps } from 'react-select/async';
import { Props } from 'react-select';
import { components as defaultComponents } from './components';
import { overwriteClassPrefix, overwriteClassName } from './constants';
// overwriting the react-select default styling to match the rock-ui styling
import './default.css';

export { AsyncProps };

export const AsyncSelect: FC<AsyncProps<any> & Props> = props => {
  const { components, className, classNamePrefix, ...restProps } = props;

  const customClassNames = className
    ? `${className} ${overwriteClassName}`
    : overwriteClassName;

  const customComponents = components
    ? { ...defaultComponents, ...components }
    : { ...defaultComponents };
  return (
    <BaseAsyncSelect
      components={customComponents}
      className={customClassNames}
      classNamePrefix={classNamePrefix || overwriteClassPrefix}
      {...restProps}
    />
  );
};
