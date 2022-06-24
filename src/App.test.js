import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


beforeEach(() => {
    render(<Provider store={store}>
        <App />
    </Provider>);
});

test('Posts are filtered by topic', async () => {
    await userEvent.click(screen.getByTestId('cat'));
    expect(screen.getByTitle(/post2/i)).toBeInTheDocument();
    expect(screen.queryByTitle(/post1/i)).not.toBeInTheDocument();
});

test('Posts are filtered by search', async () => {
    await userEvent.type(screen.getByTestId('searchbar'), 'text4');
    expect(screen.getByTitle(/post4/i)).toBeInTheDocument();
    expect(screen.queryByTitle(/post1/i)).not.toBeInTheDocument();
});

