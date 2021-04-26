export interface StepBulletProps {
  index?: number;
  type?: 'number' | 'bullet';
  current?: boolean;
  done?: boolean;
  error?: boolean;
  disabled?: boolean;
  colorScheme?: string;
}
