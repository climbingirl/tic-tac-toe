import { FieldLayout } from './FieldLayout';
import { useReduxSelector } from '../../redux/hooks';

export const Field = ({ onMove }) => {
  const field = useReduxSelector((state) => state.field);

  return <FieldLayout field={field} onMove={onMove} />;
};
