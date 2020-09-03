import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Default } from './Button.stories';

describe("MaterialButton", () => {
  const onClickMock = jest.fn();
  it("should be rendered correctly", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId("material-button"));
  });

  it("should be clickable", () => {
    render(<Default {...Default.args} onClick={onClickMock}/>);
    fireEvent.click(screen.getByTestId("material-button"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  })
});