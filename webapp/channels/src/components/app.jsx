// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {hot} from 'react-hot-loader/root';
import React , {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, withRouter} from 'react-router-dom';

import {getHistory} from 'utils/browser_history';
import store from 'stores/redux_store.jsx';

import {makeAsyncComponent} from 'components/async_load';

import CRTPostsChannelResetWatcher from 'components/threading/channel_threads/posts_channel_reset_watcher';
import { compose } from 'redux';
const LazyRoot = React.lazy(() => import('components/root'));

const Root = makeAsyncComponent('Root', LazyRoot);
const url = "http://localhost/login?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZiYTVkNWY0ZjcwZDZjMGIzZWZmNDAiLCJlbWFpbCI6InByaXRpbWl0dGFsMjdAZ21haWwuY29tIiwidGltZSI6MTY4NjYzNzA5NDY4NSwiaWF0IjoxNjg2NjM3MDk0fQ.ljakf7D1M2MrC9QUmWMtPCim5VdC83G6iSkAbhniqrA";

class App extends React.PureComponent {
    render() {
        console.log(window.location, "abc");
        return (
            <Provider store={store}>
            {/* {console.log(this.props, ' parseQ')} */}
            <button onClick={()=>{
                axios.get(url,{withCredentials: true})
                .then((response) => console.log('api call success ',response))
                .catch((error) => console.log(error, 'error aya'));
                const obj = parseQueryData(window.location);
                console.log(this.props.history, ' parseQ');
            }}>API Call</button>
        
                <CRTPostsChannelResetWatcher/>
                <Router history={getHistory()}>
                    <Route
                        path='/'
                        component={Root}
                    />
                </Router>
            </Provider>
        );
    }
}

export default compose(hot)(App);
