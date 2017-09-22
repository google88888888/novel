/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';

import {Button,Tooltip,Icon,message,Menu} from 'antd';
const { SubMenu } = Menu;
// import CompanyBrief from '../components/main/companyBrief';

import '../../css/ctlComponents/mainCtl.css';

import Util from "../../libs/util";   
import '../../libs/common.css';

const {Component} = React;

class mainCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {   

        };

    }


    render() {
        const {} = this.state;
        const {} = this.props;
        let self = this;

        let notifyTextHtml=[];
        for(let i=0;i<customerInfo.length;i++){
            notifyTextHtml.push(
                <div key={i}>
                    <div className="notify-carousel-text-div-home-page-ctl">
                        {customerInfo[i]+"购买了密盾加密服务"}
                    </div>
                </div>     
            )
        }

        return (
            <div>

            </div>
            
        )
    }
}

export default mainCtl;