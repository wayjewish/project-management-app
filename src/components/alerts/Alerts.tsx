import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Alert from './alert/Alert';

function Alerts() {
  const { alerts } = useAppSelector((state) => state.app);

  return (
    <>{alerts && alerts.map((alert) => <Alert key={alert.id} isOpen={true} alert={alert} />)}</>
  );
}

export default Alerts;
