/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';

import {Button,Tooltip,Icon,message,Carousel,Affix } from 'antd';
import '../../css/ctlComponents/logobarCtl.css';

import Util from "../../libs/util";   
import * as Name from "../../libs/name";
import '../../libs/common.css';

const {Component} = React;

class logobarCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const {} = this.state;
        const {} = this.props;
        let self = this;

   
        return (
            <div className="global-div-logo-bar-ctl">
                <div className="logo-div-logo-bar-ctl">
                    {Name.logo}
                </div>
            </div>
            
        )
    }
}

export default logobarCtl;