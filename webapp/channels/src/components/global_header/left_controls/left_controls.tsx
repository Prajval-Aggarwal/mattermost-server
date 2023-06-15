// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

import {isDesktopApp} from 'utils/user_agent';

import HistoryButtons from './history_buttons';
import ProductMenu from './product_menu';

const LeftControlsContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    flex-shrink: 0;
    flex-basis: 30%;

    > * + * {
        margin-left: 12px;
    }
`;

const LeftControls = (): JSX.Element => (
    <LeftControlsContainer>
        <img
            src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/plqrjkl4yd1rj3sgipzr'
            alt='chicmic'
            height='100px'
            width='100px'
            className='icon'
        />
        <ProductMenu/>
        {isDesktopApp() && <HistoryButtons/>}
    </LeftControlsContainer>
);

export default LeftControls;
