import { useSelector } from 'react-redux';

import { getStage } from '../../slices/stage/selector';
import { Stage } from '../../slices/stage/slice';
import { ConfirmationForm } from '../ConfirmationForm/ConfirmationForm';
import { SelectConfirmationForm } from '../SelectConfirmationForm/SelectConfirmationForm';
import { SignInForm } from '../SignInForm/SignInForm';
import { SignUpForm } from '../SignUpForm/SignUpForm';

const component: Record<Stage, React.ReactNode> = {
  signIn: <SignInForm />,
  signUp: <SignUpForm />,
  selectConfirmation: <SelectConfirmationForm />,
  confirmation: <ConfirmationForm />
};

export const FormContainer = () => {
  const stage = useSelector(getStage);

  return component[stage];
};
