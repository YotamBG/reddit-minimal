import React from 'react';
import { render, screen } from '@testing-library/react';
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
    const nostalgiaPost = await screen.findByText(/What’s something you can bring up right now to unlock some childhood nostalgia for the rest of us?/i);
    expect(nostalgiaPost).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('interestingasfuck'));

    const loadingLogo = await screen.findByTestId('loading-logo');
    expect(loadingLogo).toBeInTheDocument();

    const teslaPost = await screen.findByText(/X-ray of Nikola Tesla’s foot taken by himself using a machine he designed in 1896./i);
    expect(teslaPost).toBeInTheDocument();

});


test('Posts are filtered by search', async () => {
    await userEvent.type(screen.getByTestId('searchbar'), 'wow');
    await userEvent.click(screen.getByTestId('searchbutton'));

    const loadingLogo = await screen.findByTestId('loading-logo');
    expect(loadingLogo).toBeInTheDocument();

    const gluePost = await screen.findByText(/Gluing themselves to table is is so brave, wow./i);
    expect(gluePost).toBeInTheDocument();
});