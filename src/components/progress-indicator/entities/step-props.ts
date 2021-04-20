import { ProgressMode } from './progress-mode';
import { StepBulletProps } from './step-bullet-props';

export type StepMode = ProgressMode;

export default interface StepProps extends StepBulletProps {
  mode?: StepMode;
  title?: string;
  subtitle?: string;
  children?: JSX.Element;
}
