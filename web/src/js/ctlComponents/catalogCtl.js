/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';

import {Button,Tooltip,Icon,message,Menu} from 'antd';
const { SubMenu } = Menu;

import '../../css/ctlComponents/catalogCtl.css';

import Util from "../../libs/util";   
import '../../libs/common.css';


const {Component} = React;

class catalogCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {   

        };

    }



    render() {
        const {} = this.state;
        const {catalog} = this.props;
        let self = this;

        let catalogHtml=[];
        for(let i=0;i<catalog.length;i++){
            let catalogItemHtml=[];
            for(let j=0;j<catalog[i].content.length;j++){
                catalogItemHtml.push(
                    <div key={j} className="catalog-item-div-catalog-ctl">
                        <div key={"title"+j} className="catalog-title-item-div-catalog-ctl">
                            <nobr>{catalog[i].content[j].title}</nobr>
                        </div>    
                        <div key={"author"+j} className="catalog-author-item-div-catalog-ctl">
                            <nobr>{catalog[i].content[j].author}</nobr>
                        </div>                      
                    </div>     
                )
            }

            catalogHtml.push(
                <div key={i} className="catalog-div-catalog-ctl">
                    <div className="type-div-catalog-ctl">
                        {catalog[i].type}
                    </div>
                    <div className="item-div-catalog-ctl">
                        {catalogItemHtml}
                    </div>
                    
                </div>     
            )
        }

        return (
            <div>
                {catalogHtml}
            </div>
            
        )
    }
}

export default catalogCtl;