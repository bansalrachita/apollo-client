import React from 'react';
import './App.css';
import {ApolloProvider} from 'react-apollo';
import {App} from './App';

const client = React.lazy(() => import( '../apollo-store/client'));

export const Root = () => {

    return (
        <ApolloProvider client={client}>
            <App client={client}/>
        </ApolloProvider>
    );
}