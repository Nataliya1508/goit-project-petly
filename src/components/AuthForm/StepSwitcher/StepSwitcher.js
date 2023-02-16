import RegisterStep1 from './RegisterStep1';
import RegisterStep2 from './RegisterStep2';

const StepSwitcher = ({ step, ...rest }) => {
  switch (step) {
    case 'step1':
      return <RegisterStep1 {...rest} />;
    case 'step2':
      return <RegisterStep2 {...rest} />;
    default:
      return null;
  }
};

export default StepSwitcher;
