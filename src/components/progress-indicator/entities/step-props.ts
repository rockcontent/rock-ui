import { ProgressMode } from './progress-mode';
import { StepBulletProps } from './step-bullet-props';

export type StepMode = ProgressMode;

export default interface StepProps extends StepBulletProps {
  /**
   * Defines the orientation of the step
   */
  mode?: StepMode;
  title?: string;
  subtitle?: string;
  children?: JSX.Element;
  /**
   * Defines if the step is disabled
   */
  disabled?: boolean;
  /**
   * Defines the colorscheme for the step
   */
  colorScheme?: string;
}
