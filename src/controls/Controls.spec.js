// Test away!

import React from 'react';
import {
    render,
    fireEvent
} from "@testing-library/react";
import Controls from './Controls';
import { setTimeout } from 'timers';

test("Buttons workin in controls toggles and disables", () => {
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
    const openGate = getByText(/Close Gate/i);

    fireEvent.click(unlockGate);
    expect(openGate.disabled).toEqual(true);
    setTimeout(() => {
        const buttonLockGate = getByText(/Lock Gate/i);
        const closeGate = getByText(/Open Gate/i);
        fireEvent.click(buttonLockGate);
        expect(closeGate.disabled).toEqual(false)
    },1000)
});

