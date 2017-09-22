/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';

import {Button,Tooltip,Icon,message,Menu} from 'antd';
const { SubMenu } = Menu;
import CompanyBrief from '../components/aboutUs/companyBrief';

import '../../css/ctlComponents/aboutUsCtl.css';

import Util from "../../libs/util";   
import '../../libs/common.css';

const {Component} = React;

class aboutUsCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {   

        };

    }

    handleClick = (e) => {
        this.props.onChangeShow("aboutUs",e.key);
    }

    render() {
        const {} = this.state;
        const {aboutUsShow} = this.props;
        let self = this;

        let mainHtml;
        if(aboutUsShow==="companyBrief"){
            mainHtml=<div>
                <CompanyBrief />
            </div>
        }

        return (
            <div>
                <div className="bar-div-common">
                </div> 
                <div className="global-div-about-us-ctl">
                    <div className="menu-div-about-us-ctl">
                        <div className="menu-title-div-about-us-ctl">
                            <div className="menu-title-left-div-about-us-ctl">
                                关于我们
                            </div>
                            <div className="menu-title-right-div-about-us-ctl">
                                ABOUT US
                            </div>   
                            <div className="clear-float-div-common"></div>                
                        </div>
                        <div className="menu-main-div-about-us-ctl">
                            <Menu
                                selectedKeys={[aboutUsShow]}
                                mode="inline"
                                theme="light"
                                onClick={this.handleClick}
                                >
                                <Menu.Item key="companyBrief">
                                    <span className="menu-main-font-div-about-us-ctl">公司简介</span>
                                </Menu.Item>
                                {/*<Menu.Item key="companyHonor">
                                    <span className="menu-main-font-div-about-us-ctl">资质荣誉</span>
                                </Menu.Item>
                                <Menu.Item key="companyCulture">
                                    <span className="menu-main-font-div-about-us-ctl">公司文化</span>
                                </Menu.Item>
                                <Menu.Item key="newsCenter">
                                    <span className="menu-main-font-div-about-us-ctl">新闻中心</span>
                                </Menu.Item>
                                <Menu.Item key="talentsRecruiting">
                                    <span className="menu-main-font-div-about-us-ctl">人才招募</span>
                                </Menu.Item>
                                <Menu.Item key="connectUs">
                                    <span className="menu-main-font-div-about-us-ctl">联系我们</span>
                                </Menu.Item>*/}
                            </Menu>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                    <div className="main-div-about-us-ctl">
                        {mainHtml}
                    </div>
                    <div className="clear-float-div-common"></div>
                </div>

            </div>
            
        )
    }
}

export default aboutUsCtl;