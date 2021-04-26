import { extendTheme } from '@chakra-ui/react';
import { COLORS } from '../../constants/colors/colors';
import { FONT_SIZES } from '../../constants/font-sizes/font-sizes';

const FONT_FAMILY = {
  heading:
    '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  body:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

const rockTheme = extendTheme({
  styles: {
    global: {
      '*': {
        borderColor: COLORS.GRAY_200,
      },
      body: {
        fontFamily: FONT_FAMILY.body,
      },
    },
  },

  fonts: {
    body: FONT_FAMILY.body,
    heading: FONT_FAMILY.heading,
  },

  colors: {
    gray: {
      50: COLORS.GRAY_50,
      100: COLORS.GRAY_100,
      200: COLORS.GRAY_200,
      300: COLORS.GRAY_300,
      400: COLORS.GRAY_400,
      500: COLORS.GRAY_500,
      700: COLORS.GRAY_700,
    },
    red: {
      50: COLORS.RED_50,
      100: COLORS.RED_100,
      200: COLORS.RED_200,
      300: COLORS.RED_300,
      400: COLORS.RED_400,
      500: COLORS.RED_500,
      600: COLORS.RED_600,
      700: COLORS.RED_700,
      800: COLORS.RED_800,
      900: COLORS.RED_900,
    },
    orange: {
      50: COLORS.ORANGE_50,
      100: COLORS.ORANGE_100,
      200: COLORS.ORANGE_200,
      300: COLORS.ORANGE_300,
      400: COLORS.ORANGE_400,
      500: COLORS.ORANGE_500,
      600: COLORS.ORANGE_600,
      700: COLORS.ORANGE_700,
      800: COLORS.ORANGE_800,
      900: COLORS.ORANGE_900,
    },
    yellow: {
      50: COLORS.YELLOW_50,
      100: COLORS.YELLOW_100,
      200: COLORS.YELLOW_200,
      300: COLORS.YELLOW_300,
      400: COLORS.YELLOW_400,
      500: COLORS.YELLOW_500,
      600: COLORS.YELLOW_600,
      700: COLORS.YELLOW_700,
      800: COLORS.YELLOW_800,
      900: COLORS.YELLOW_900,
    },
    green: {
      50: COLORS.GREEN_50,
      100: COLORS.GREEN_100,
      200: COLORS.GREEN_200,
      300: COLORS.GREEN_300,
      400: COLORS.GREEN_400,
      500: COLORS.GREEN_500,
      600: COLORS.GREEN_600,
      700: COLORS.GREEN_700,
      800: COLORS.GREEN_800,
      900: COLORS.GREEN_900,
    },
    teal: {
      50: COLORS.TEAL_50,
      100: COLORS.TEAL_100,
      200: COLORS.TEAL_200,
      300: COLORS.TEAL_300,
      400: COLORS.TEAL_400,
      500: COLORS.TEAL_500,
      600: COLORS.TEAL_600,
      700: COLORS.TEAL_700,
      800: COLORS.TEAL_800,
      900: COLORS.TEAL_900,
    },
    blue: {
      50: COLORS.BLUE_50,
      100: COLORS.BLUE_100,
      200: COLORS.BLUE_200,
      300: COLORS.BLUE_300,
      400: COLORS.BLUE_400,
      500: COLORS.BLUE_500,
      600: COLORS.BLUE_600,
      700: COLORS.BLUE_700,
      800: COLORS.BLUE_800,
      900: COLORS.BLUE_900,
    },
    cyan: {
      50: COLORS.CYAN_50,
      100: COLORS.CYAN_100,
      200: COLORS.CYAN_200,
      300: COLORS.CYAN_300,
      400: COLORS.CYAN_400,
      500: COLORS.CYAN_500,
      600: COLORS.CYAN_600,
      700: COLORS.CYAN_700,
      800: COLORS.CYAN_800,
      900: COLORS.CYAN_900,
    },
    purple: {
      50: COLORS.PURPLE_50,
      100: COLORS.PURPLE_100,
      200: COLORS.PURPLE_200,
      300: COLORS.PURPLE_300,
      400: COLORS.PURPLE_400,
      500: COLORS.PURPLE_500,
      600: COLORS.PURPLE_600,
      700: COLORS.PURPLE_700,
      800: COLORS.PURPLE_800,
      900: COLORS.PURPLE_900,
    },
    pink: {
      50: COLORS.PINK_50,
      100: COLORS.PINK_100,
      200: COLORS.PINK_200,
      300: COLORS.PINK_300,
      400: COLORS.PINK_400,
      500: COLORS.PINK_500,
      600: COLORS.PINK_600,
      700: COLORS.PINK_700,
      800: COLORS.PINK_800,
      900: COLORS.PINK_900,
    },
    black_alpha: {
      50: COLORS.BLACK_ALPHA_50,
      100: COLORS.BLACK_ALPHA_100,
      200: COLORS.BLACK_ALPHA_200,
      300: COLORS.BLACK_ALPHA_300,
      400: COLORS.BLACK_ALPHA_400,
      500: COLORS.BLACK_ALPHA_500,
      600: COLORS.BLACK_ALPHA_600,
      700: COLORS.BLACK_ALPHA_700,
      800: COLORS.BLACK_ALPHA_800,
      900: COLORS.BLACK_ALPHA_900,
    },
    white_alpha: {
      50: COLORS.WHITE_ALPHA_50,
      100: COLORS.WHITE_ALPHA_100,
      200: COLORS.WHITE_ALPHA_200,
      300: COLORS.WHITE_ALPHA_300,
      400: COLORS.WHITE_ALPHA_400,
      500: COLORS.WHITE_ALPHA_500,
      600: COLORS.WHITE_ALPHA_600,
      700: COLORS.WHITE_ALPHA_700,
      800: COLORS.WHITE_ALPHA_800,
      900: COLORS.WHITE_ALPHA_900,
    },
  },
  fontSizes: FONT_SIZES,
  components: {
    Heading: {
      baseFont:
        '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      baseStyle: {
        fontWeight: 700,
      },
    },
  },
});

export { rockTheme as RockUITheme, FONT_FAMILY };
