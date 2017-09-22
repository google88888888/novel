/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';

import {Button,Tooltip,Icon,message,Menu} from 'antd';
const { SubMenu } = Menu;

import CloudEncryptCase from '../components/classicCase/cloudEncryptCase';
import AnhengEncryptCase from '../components/classicCase/anhengEncryptCase';

import '../../css/ctlComponents/classicCaseCtl.css';

import Util from "../../libs/util";   
import '../../libs/common.css';


const {Component} = React;

class classicCaseCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {   

        };

    }

    handleClick = (e) => {
        this.props.onChangeShow("classicCase",e.key);
    }



    render() {
        const {} = this.state;
        const {classicCaseShow} = this.props;
        let self = this;

        let mainHtml;
        if(classicCaseShow==="cloudEncryptCase"){
            mainHtml=<div>
                <CloudEncryptCase />
            </div>
        }else if(classicCaseShow==="anhengEncryptCase"){
            mainHtml=<div>
                <AnhengEncryptCase />
            </div>
        }

        return (
            <div>
                <div className="bar-div-common">
                </div> 
                <div className="global-div-classic-case-ctl">
                    <div className="menu-div-classic-case-ctl">
                        <div className="menu-title-div-classic-case-ctl">
                            <div className="menu-title-left-div-classic-case-ctl">
                                典型案例
                            </div>
                            <div className="menu-title-right-div-classic-case-ctl">
                                TYPICAL CASE
                            </div>   
                            <div className="clear-float-div-common"></div>                
                        </div>
                        <div className="menu-main-div-classic-case-ctl">
                            <Menu
                                selectedKeys={[classicCaseShow]}
                                mode="inline"
                                theme="light"
                                onClick={this.handleClick}
                                >
                                <Menu.Item key="cloudEncryptCase">
                                    <span className="menu-main-font-div-classic-case-ctl">云密盾典型案例</span>
                                </Menu.Item>
                                <Menu.Item key="anhengEncryptCase">
                                    <span className="menu-main-font-div-classic-case-ctl">安恒密盾典型案例</span>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                    <div className="main-div-classic-case-ctl">
                        {mainHtml}
                    </div>
                    <div className="clear-float-div-common"></div>
                </div>
            </div>
            
        )
    }
}

export default classicCaseCtl;