// Test away!

import React from 'react';
import {
    render,
    fireEvent
} from "@testing-library/react";

import Dashboard from './Dashboard';


// test('match snapshot', () => {
//     expect(render( < Dashboard /> )).toMatchSnapshot();
// })

test("contains texts", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Unlocked/i);
    getByText(/Open/i);
    getByText(/Lock Gate/i);
    getByText(/Close Gate/i);

});