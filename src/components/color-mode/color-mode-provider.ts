import {
  ColorMode as BaseColorMode,
  ColorModeContext as BaseColorModeContext,
  ColorModeOptions as BaseColorModeOptions,
  ColorModeProvider as BaseColorModeProvider,
  ColorModeProviderProps as BaseColorModeProviderProps,
  useColorMode as BaseUseColorMode,
  useColorModeValue as BaseUseColorModeValue,
  DarkMode as BaseDarkMode,
  LightMode as BaseLightMode,
} from '@chakra-ui/react';

export { BaseColorMode as ColorMode };
export { BaseColorModeOptions as ColorModeOptions };
export { BaseColorModeContext as ColorModeContext };

/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */
export { BaseUseColorMode as useColorMode };

/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
export { BaseColorModeProvider as ColorModeProvider };
export { BaseColorModeProviderProps as ColorModeProviderProps };

/**
 * Locks the color mode to `dark`, without any way to change it.
 */
export { BaseDarkMode as DarkMode };

/**
 * Locks the color mode to `light` without any way to change it.
 */
export { BaseLightMode as LightMode };

/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
export { BaseUseColorModeValue as useColorModeValue };
