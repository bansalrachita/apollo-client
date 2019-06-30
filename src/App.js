import React from 'react';
import './App.css';
import {ApolloProvider} from 'react-apollo';
import { Helmet } from 'react-helmet';
const client = React.lazy(() => import( './apollo-store/client'));

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>My apollo app</title>
            </Helmet>
            <div className="App">
                <header className="App-header">
                </header>
            </div>
        </ApolloProvider>
    );
}
