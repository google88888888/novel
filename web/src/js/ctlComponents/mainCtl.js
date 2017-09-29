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
        const {data,addTextColor} = this.props;
        let self = this;
        let dataHtml=[];
        for(let i=0;i<data.length;i++){
            let contentHtml=[];
            for(let j=0;j<data[i].content.length;j++){
                contentHtml.push(
                    <div key={j} className="content-item-div-main-ctl">
                        {data[i].content[j]}
                    </div>     
                )
            }
            dataHtml.push(
                <div key={i} className="data-item-div-main-ctl">
                    <div className="from-catalog-div-main-ctl">
                        来自话题：{data[i].type}
                    </div>
                    <div className="title-div-main-ctl">
                        {addTextColor(data[i].title)}
                    </div>
                    <div className="author-div-main-ctl">
                        {addTextColor(data[i].author)}
                    </div>
                    <div className="content-div-main-ctl">
                        {contentHtml}
                    </div>

                </div>     
            )
        }

        return (
            <div>
                {dataHtml}
            </div>
            
        )
    }
}

export default mainCtl;