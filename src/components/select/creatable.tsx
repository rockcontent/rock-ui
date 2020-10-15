import React, { FC } from 'react';
import BaseCreatable, {
  CreatableProps as BaseCreatableProps,
} from 'react-select/creatable';
import { Props } from 'react-select';
import { components as defaultComponents } from './components';
import { overwriteClassName, overwriteClassPrefix } from './constants';
// overwriting the react-select default styling to match the rock-ui styling
import './default.css';

export { BaseCreatableProps as CreatableProps };

export const CreatableSelect: FC<BaseCreatableProps<any> & Props> = props => {
  const { components, className, classNamePrefix, ...restProps } = props;

  const customClassNames = className
    ? `${className} ${overwriteClassName}`
    : overwriteClassName;

  const customComponents = components
    ? { ...defaultComponents, ...components }
    : { ...defaultComponents };
  return (
    <BaseCreatable
      components={customComponents}
      className={customClassNames}
      classNamePrefix={classNamePrefix || overwriteClassPrefix}
      {...restProps}
    />
  );
};
