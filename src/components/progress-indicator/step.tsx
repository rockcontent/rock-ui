import React from 'react';
import HStep from './h-step';
import VStep from './v-step';
import StepProps from './entities/step-props';

const Step: React.FC<StepProps> = props => {
  if (props.mode === 'horizontal') {
    return <HStep {...props} />;
  }

  return <VStep {...props} />;
};

export default Step;
