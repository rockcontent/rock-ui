import React, { FC } from 'react';
import BaseAsyncCreatable, { Props } from 'react-select/async-creatable';
import { components as defaultComponents } from './components';
import { overwriteClassName, overwriteClassPrefix } from './constants';
// overwriting the react-select default styling to match the rock-ui styling
import './default.css';

export { Props as AsyncCreatableProps };

export const AsyncCreatableSelect: FC<Props<any>> = props => {
  const { components, className, classNamePrefix, ...restProps } = props;

  const customClassNames = className
    ? `${className} ${overwriteClassName}`
    : overwriteClassName;

  const customComponents = components
    ? { ...defaultComponents, ...components }
    : { ...defaultComponents };

  return (
    <BaseAsyncCreatable
      classNamePrefix={classNamePrefix || overwriteClassPrefix}
      components={customComponents}
      className={customClassNames}
      {...restProps}
    />
  );
};
