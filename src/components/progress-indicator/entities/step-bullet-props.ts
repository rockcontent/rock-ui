export interface StepBulletProps {
  index?: number;
  type?: 'number' | 'bullet';
  /**
   * Add the `current` style to the step
   */
  current?: boolean;
  /**
   * Add the `done` style to the step
   */
  done?: boolean;
  /**
   * Add the `error` style to the step
   */
  error?: boolean;
  disabled?: boolean;
  colorScheme?: string;
}
