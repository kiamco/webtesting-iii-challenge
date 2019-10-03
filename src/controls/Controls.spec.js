// Test away!

import React from 'react';
import {
    render,
    fireEvent
} from "@testing-library/react";
import Controls from './Controls';
import { setTimeout } from 'timers';

test("Buttons workin in control nothing is toggles", () => {
  const toggleLocked = jest.fn();
  const toggleClosed = jest.fn();
  const { getByText } = render(
      <Controls
          locked={true}
          closed={false}
          toggleLocked={toggleLocked}
          toggleClosed={toggleClosed}
      />

      
  );

    const unlockGate = getByText(/Unlock Gate/i);
    fireEvent.click(unlockGate);
    
    setTimeout(() => {
        const buttonLockGate = getByText(/Lock Gate/i);
        fireEvent.click(buttonLockGate);
    },1000)
});

