import { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors/colors';

export interface ColorScheme {
  base: string;
  accent: string;
}

export const useColorscheme = (color: string): ColorScheme => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>({
    base: COLORS.BLUE_100,
    accent: COLORS.BLUE_500,
  });

  useEffect(() => {
    setColorScheme({
      base: COLORS[`${color.toUpperCase()}_100` as keyof typeof COLORS],
      accent: COLORS[`${color.toUpperCase()}_500` as keyof typeof COLORS],
    });
  }, [color]);

  return colorScheme;
};
