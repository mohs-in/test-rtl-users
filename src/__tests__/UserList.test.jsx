import React from 'react';
import { render, screen, within } from '@testing-library/react';
import UserList from '../components/UserList';

function renderComponent() {
    const users = [
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@example.com' },
    ];
    
    render(<UserList users={users} />);

    return {
        users,
    };
}

test('render one row per user', () => {
    renderComponent();

    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
    const { users } = renderComponent();

    users.forEach(user => {
        const row = within(screen.getByTestId('users')).getByText(user.name).closest('tr');

        const nameCell = within(row).getByRole('cell', { name: user.name });
        const emailCell = within(row).getByRole('cell', { name: user.email });

        expect(nameCell).toBeInTheDocument();
        expect(emailCell).toBeInTheDocument();
    })
});