import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Alert from './alert/Alert';

function ErrorsComponent() {
  const { errors } = useAppSelector((state) => state.app);

  return (
    <>{errors && errors.map((error) => <Alert key={error.id} isOpen={true} error={error} />)}</>
  );
}

export default ErrorsComponent;
