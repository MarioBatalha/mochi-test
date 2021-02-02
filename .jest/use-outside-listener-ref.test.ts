import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SearchLocationInput from '../components/shared/form/search-location-input';

describe('Use click outside listener references', () => {
  it('Should display click event', done => {
    const ClickListener = () => {
      done();
    };

    const { getByText } = render(<PredictionButton onClick={clickListener} />);
    const node = getByText('click');
    fireEvent.click(node);
    expect('click').toBeEnabled();
  });

  it('Should display escape event', remove => {
    const EscapeListener = () => {
      remove();
    };

    const { getByText } = render(<PredictionButton onClick={clickListener} />);
    const node = getByText('keyup');
    fireEvent.click(node);
    expect('remove').toBeDisabled();
  });
});
