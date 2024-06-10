// src/store/slices.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedSlot {
  courtId: number;
  timeslot: string;
}

interface BookingState {
  selectedSlots: SelectedSlot[];
}

const initialState: BookingState = {
  selectedSlots: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addSlot: (state, action: PayloadAction<SelectedSlot>) => {
      state.selectedSlots.push(action.payload);
    },
    removeSlot: (state, action: PayloadAction<SelectedSlot>) => {
      state.selectedSlots = state.selectedSlots.filter(
        slot => !(slot.courtId === action.payload.courtId && slot.timeslot === action.payload.timeslot)
      );
    },
  },
});

export const { addSlot, removeSlot } = bookingSlice.actions;
export default bookingSlice.reducer;
