// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import webSocketClient from 'client/web_websocket_client.jsx';
import {hot} from 'react-hot-loader/root';
import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router-dom';

import {getHistory} from 'utils/browser_history';
import store from 'stores/redux_store.jsx';

import {makeAsyncComponent} from 'components/async_load';

import CRTPostsChannelResetWatcher from 'components/threading/channel_threads/posts_channel_reset_watcher';
const LazyRoot = React.lazy(() => import('components/root'));

const Root = makeAsyncComponent('Root', LazyRoot);
import axios from 'axios';
// history.js
import history from "../plugins/products";
import { websocket } from 'mattermost-redux/actions';
import { WebSocketClient } from '@mattermost/client';
import { promises } from 'dns';
// import { createBrowserHistory } from "history";
// export default createBrowserHistory(); 
class App extends React.PureComponent {
    componentDidMount(){
        console.log(this.props,'app component props');
        if(window.location.search?.includes('token'))
        {
                let redirectSearchUrl = window.location.search;
                console.log(window.location.search,' componentDidMount');
                redirectSearchUrl = redirectSearchUrl.replaceAll('%2F', '/');
                redirectSearchUrl = redirectSearchUrl.replaceAll('%3F', '?');
                redirectSearchUrl = redirectSearchUrl.replaceAll('%3D', '=')
                console.log('redirectSearchUrl:', redirectSearchUrl);
                const queryParam = redirectSearchUrl?.split('=').at(-1);
                console.log(queryParam, redirectSearchUrl, 'param<><>');
                const url = `http://192.180.0.123:3000/login?token=${queryParam}`;
                // queryParam
            if(queryParam)
            {
                    axios.get(url,{withCredentials: true})
                        .then((response) => {
                            console.log('api <><>< call success ',response)
                            WebSocketClient.onerror = (evt) => {
                                if (this.connectFailCount <= 1) {
                                    console.log('websocket error'); //eslint-disable-line no-console
                                    console.log(evt, ',><><><> event '); //eslint-disable-line no-console
                                    alert('Socket error ws');
                                }
                    
                                this.errorCallback?.(evt);
                                this.errorListeners.forEach((listener) => listener(evt));
                            };
                            history.push('/chicmic1/channels/town-square');
                        })
                        .catch((error) => {
                            window.close()
                        })
                        // const obj = parseQueryData(window.location);
                        // console.log(this.props.hcaistory, ' parseQ');
        
                    // similar behavior as an HTTP redirect
                    // window.location.replace("localhost:8065/chicmic1/channels/town-square");
                    // this.props.history.push('/chicmic1/channels/town-square');
                
            // }
            }
        }
    }
    
    componentWillUnmount(){
        if(window.location.pathname.includes('login') || window.location.pathname === '/')
        {
            console.log(window.location.pathname,'pathname ');  
            window.close();
        }
    }
    render() {
        if(window.location.pathname.includes('login') || window.location.pathname === '/')
        {
            console.log("LLLLLLL");
            console.log(window.location.pathname,'pathname ');  
            global.window.close();
        }
        return (
            <Provider store={store}>
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

export default hot(App);
