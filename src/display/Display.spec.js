// Test away!

import React from 'react';
import {
    render,
    fireEvent
} from "@testing-library/react";
import {
    setTimeout
} from 'timers';
import Display from './Display';

test("test string output when locked",()=> {
    const { getByText } = render(
        <Display locked={true} closed={false} />
  );
  getByText(/Locked/i);
});


test("test string output when NOT locked", () => {
    const { getByText } = render(
        <Display locked={false} closed={false} />
    );
    getByText(/Unlocked/i);
});

test("test class output when closed", () => {
    const { getByText } = render(
        <Display locked={true} closed={true} />
    );
    getByText(/Closed/i).classList.contains('red-led');;
})


test("test class output when NOT closes", () => {
    const { getByText } = render(
        <Display locked={false} closed={false} />
    );
    getByText(/Open/i).classList.contains('green-led');
})


