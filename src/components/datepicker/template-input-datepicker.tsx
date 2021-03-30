import React from 'react';
import { Stack } from '../stack';
import { Input, InputRightElement, InputGroup, InputProps } from '../input';
import { IconButton } from '../button';
import { CalendarOutlineIcon, XCircleSolidIcon } from '../../icons';

type TTemplateInputDatepicker = InputProps & {
  onClick?: () => void;
  isDisabled?: boolean | undefined;
  clearButton?: boolean;
  onClear?: () => void;
};

const TemplateInputDatepicker = React.forwardRef<any, TTemplateInputDatepicker>(
  ({ onClick, isDisabled, clearButton, onClear, ...props }, ref: any) => {
    return (
      <Stack>
        <InputGroup>
          <InputRightElement>
            {clearButton && (
              <IconButton
                borderRadius="2px"
                size="sm"
                position="absolute"
                right="35px"
                _hover={{ bg: 'transparent' }}
                _focus={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
                variant="ghost"
                aria-label="Clear"
                onClick={onClear}
                icon={
                  <XCircleSolidIcon
                    w="16px"
                    h="16px"
                    title="Clear"
                    alt="Clear"
                    fill="gray.500"
                  />
                }
              />
            )}
            <IconButton
              disabled={isDisabled}
              borderRadius="2px"
              size="sm"
              variant="ghost"
              aria-label="Open calendar"
              onClick={onClick}
              icon={
                <CalendarOutlineIcon
                  color="gray.800"
                  w="16px"
                  h="16px"
                  title="Open calendar"
                  alt="Open calendar"
                />
              }
            />
          </InputRightElement>
          <Input
            {...props}
            _focus={{
              shadow: '0 0 0 1px #225ed8!important',
              borderColor: '#225ED8',
            }}
            ref={ref}
            data-testid="test-datepicker-input"
          />
        </InputGroup>
      </Stack>
    );
  }
);

export default TemplateInputDatepicker;
