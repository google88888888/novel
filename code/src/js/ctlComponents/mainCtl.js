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
        const {data} = this.props;
        let self = this;

        let dataHtml=[];
        for(let i=0;i<data.length;i++){
            dataHtml.push(
                <div key={i}>
                    <div className="data-item-div-main-ctl">
                        {data[i]+"购买了密盾加密服务"}
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