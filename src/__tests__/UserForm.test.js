import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import UserForm from '../components/UserForm';

test('it shows two inputs and a button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('check for the functionality of button with input args', async () => {
    const mock = jest.fn();

    render(<UserForm onUserAdd={mock}/>);

    const inputName = screen.getByLabelText(/name/i);
    const inputEmail = screen.getByLabelText(/email/i);
    const button = screen.getByRole('button', {name: /submit/i });

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    await userEvent.type(inputName, 'Mohsin');
    await userEvent.type(inputEmail, 'in.mohsin@outlook.com');

    await userEvent.click(button);

    expect(mock).toHaveBeenCalledWith( { name: 'Mohsin', email: 'in.mohsin@outlook.com'} );

    expect(inputName.value).toBe('');
    expect(inputEmail.value).toBe('');

});