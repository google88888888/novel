/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';

import {Button,Tooltip,Icon,message,Menu} from 'antd';
const { SubMenu } = Menu;
import CloudEncrypt from '../components/productCenter/cloudEncrypt';
import AnhengEncrypt from '../components/productCenter/anhengEncrypt';
import Mixintong from '../components/productCenter/mixintong';
import Jiushiwo from '../components/productCenter/jiushiwo';
// import LeadCompanyInfo from '../../libs/companyInfo/js/companyInfo';

import '../../css/ctlComponents/productCenterCtl.css';

import Util from "../../libs/util";   
import '../../libs/common.css';


const {Component} = React;

class productCenterCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            openKeys:[],
        };
        

    }
    componentDidMount() {
        //console.log("constructor是"+this.props.productCenterShow)
        let {productCenterShow} =this.props;
        if(productCenterShow==="cloudEncrypt"){
            let openKeys=[];
            this.setState({ 
                openKeys:openKeys,
            });
        }else if(productCenterShow==="anhengEncrypt"){
            let openKeys=[];
            this.setState({ 
                openKeys:openKeys,
            });
        }else if(productCenterShow==="mixintong"){
            let openKeys=[];
            openKeys.push("encryptConnect")
            this.setState({ 
                openKeys:openKeys,
            });
        }else if(productCenterShow==="jiushiwo"){
            let openKeys=[];
            openKeys.push("encryptConnect")
            this.setState({ 
                openKeys:openKeys,
            });
        }

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.productCenterShow){
            //console.log("componentWillReceiveProps是"+nextProps.productCenterShow)
            let productCenterShow=nextProps.productCenterShow;
            if(productCenterShow==="cloudEncrypt"){
                let openKeys=[];
                this.setState({ 
                    openKeys:openKeys,
                });
            }else if(productCenterShow==="anhengEncrypt"){
                let openKeys=[];
                this.setState({ 
                    openKeys:openKeys,
                });
            }else if(productCenterShow==="mixintong"){
                let openKeys=[];
                openKeys.push("encryptConnect")
                this.setState({ 
                    openKeys:openKeys,
                });
            }else if(productCenterShow==="jiushiwo"){
                let openKeys=[];
                openKeys.push("encryptConnect")
                this.setState({ 
                    openKeys:openKeys,
                });
            }


        }  
    }

    handleClick = (e) => {
        this.props.onChangeShow("productCenter",e.key);
    }


    onOpenChange = (e) => {
        if(e[0]==="encryptConnect"){
            let openKeys=[];
            openKeys.push("encryptConnect");
            this.setState({ 
                openKeys:openKeys,
            });
        }else{
            let openKeys=[];
            this.setState({ 
                openKeys:openKeys,
            }); 
            
        }
    }

    render() {
        const {openKeys} = this.state;
        const {productCenterShow} = this.props;
        const {} = this.props;
        let self = this;
        let mainHtml;
        
        if(productCenterShow==="cloudEncrypt"){
            mainHtml=<div>
                <CloudEncrypt />
            </div>
        }else if(productCenterShow==="anhengEncrypt"){
            mainHtml=<div>
                <AnhengEncrypt />
            </div>
        }else if(productCenterShow==="mixintong"){
            mainHtml=<div>
                <Mixintong />
            </div>
        }else if(productCenterShow==="jiushiwo"){
            mainHtml=<div>
                <Jiushiwo />
            </div>
        }
        return (
            <div>
                <div className="bar-div-common">
                </div> 
                <div className="global-div-product-center-ctl">
  
                    <div className="menu-div-product-center-ctl">
                        <div className="menu-title-div-product-center-ctl">
                            <div className="menu-title-left-div-product-center-ctl">
                                产品中心
                            </div>
                            <div className="menu-title-right-div-product-center-ctl">
                                PRODUCTS
                            </div>   
                            <div className="clear-float-div-common"></div>                
                        </div>
                        <div className="menu-main-div-product-center-ctl">
                            <Menu
                                selectedKeys={[productCenterShow,"encryptConnect"]}
                                mode="inline"
                                theme="light"
                                onSelect={this.handleClick}
                                openKeys={openKeys}
                                onOpenChange={this.onOpenChange}
                                >
                                <Menu.Item key="cloudEncrypt">
                                    <span className="menu-main-font-div-product-center-ctl">云密盾</span>
                                </Menu.Item>
                                <Menu.Item key="anhengEncrypt">
                                    <span className="menu-main-font-div-product-center-ctl">安恒密盾</span>
                                </Menu.Item>

                                <SubMenu key="encryptConnect" title={<span className="menu-main-font-div-product-center-ctl">加密通信</span>}>
                                    <Menu.Item key="mixintong"><span className="menu-main-font-div-product-center-ctl">密信通</span></Menu.Item>
                                    <Menu.Item key="jiushiwo"><span className="menu-main-font-div-product-center-ctl">就是我</span></Menu.Item>
                                    {/*<Menu.Item key="mixin"><span className="menu-main-font-div-product-center-ctl">密信</span></Menu.Item>*/}
                                </SubMenu>
                            </Menu>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                    <div className="main-div-product-center-ctl">
                        {mainHtml}
                    </div>
                    <div className="clear-float-div-common"></div>
                </div>
            </div>
            
        )
    }
}

export default productCenterCtl;