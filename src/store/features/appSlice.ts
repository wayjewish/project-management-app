import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface IAlertApp {
  id: string;
  type: 'error' | 'warning' | 'info' | 'success';
  message: string;
}

export interface IAuthState {
  alerts: IAlertApp[];
}

const initialState: IAuthState = {
  alerts: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addAlert: (state, action) => {
      const alert = {
        ...action.payload,
        id: uuidv4(),
      };

      state.alerts.push(alert);
    },
    removeAlert: (state, action) => {
      const deletedAlert = action.payload;
      const newAlerts = [...state.alerts];
      const index = newAlerts.map((alert) => alert.id).indexOf(deletedAlert.id);

      newAlerts.splice(index, 1);
      state.alerts = newAlerts;
    },
  },
});

export const { addAlert, removeAlert } = appSlice.actions;

export default appSlice.reducer;
