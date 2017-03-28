import './sass/App.scss';
import React from 'react';
import Headline from './helper/headline';

import FunctionComponent    from './components/function.jsx';
import PureComponent        from './components/pure.jsx';

const App = () =>
    <div className="App">
        <Headline>Components</Headline>
        <FunctionComponent description={ FunctionComponent.description } />
        <PureComponent description={ PureComponent.description }  />
    </div>;


export default App;
