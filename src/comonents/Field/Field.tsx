import { FieldLayout } from './FieldLayout.tsx';
import { useReduxSelector } from '../../redux/hooks';

interface FieldProps {
  onMove: (index: number) => void;
}

export const Field = ({ onMove }: FieldProps) => {
  const field = useReduxSelector((state) => state.field);

  return <FieldLayout field={field} onMove={onMove} />;
};
