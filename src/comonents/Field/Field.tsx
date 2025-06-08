import { useAppSelector } from '../../redux/hooks.ts';
import { FieldLayout } from './FieldLayout.tsx';

interface FieldProps {
  onMove: (index: number) => void;
}

export const Field = ({ onMove }: FieldProps) => {
  const field = useAppSelector((state) => state.field);

  return <FieldLayout field={field} onMove={onMove} />;
};
