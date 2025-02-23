import { QuestionIcon, ConfirmatioIcon, ErrorIcon } from './Icons';

const PopupIcon = ({ type }: { type?: string }) => {
  switch (type) {
    case 'question':
      return <QuestionIcon />;
    case 'confirmation':
      return <ConfirmatioIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return null;
  }
};

export default PopupIcon;
