import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchLocationInput from '../components/shared/form/search-location-input';
import { Props } from '../elements/text-field/types';

function RenderSearchLocationInput(props: Partial<Props> = {}) {
  const defaultProps = {
    onHandleSelectPrediction() {
      return;
    },
    onPredictionsLoaded() {
      return;
    },
    onGeoCodeLoaded() {
      return;
    },
    onHandleKeyEnter() {
      return;
    },
    onIsDisabled: true,
  };
  return render(<SearchLocationInput {...defaultProps} {...props} />);
}

describe('<SearchLocationInput />', () => {
  test('Should display a blank search location input form', async () => {
    const { findByTestAttribute } = RenderSearchLocationInput();

    const searchLocationInput = await findByTestAttribute('textarea');
    expect('textarea').toHaveFormValues({
      value: '',
    });
  });

  test('Should entering a value', async () => {
    const onHandleKeyEnter = jest.fn();
    const { findByTestAttribute } = RenderSearchLocationInput({ onHandleKeyEnter });
    const value = await findByTestAttribute('value');

    fireEvent.change(value, { target: { value: 'test' } });
    expect(onHandleKeyEnter).toHaveBeenCalledWith('test');
  });
});
