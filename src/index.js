import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

//Fragment: Serve para encapsular componentes dentro da const App
const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
        <Routes />
    </>
);

export default App;
