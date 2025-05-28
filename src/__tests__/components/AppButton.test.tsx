import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppButton from '../../components/buttons/AppButton';
import { AppColors } from '../../styles/colors';
import App from '../../../App';

describe('AppButton Component', () => {
    it('renders correctly with given title', () => {
        const { getByText } = render(<AppButton onPress={() => { }} title="Click Me" />);
        expect(getByText('Click Me')).toBeTruthy();
    });

    it('calls onPress when pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<AppButton onPress={onPressMock} title="Click Me" />);
        fireEvent.press(getByText('Click Me'));
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
});