/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';
import { Table ,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import '../../../css/components/productCenter/anhengEncrypt.css';
import anhengEncryptProduct from  '../../../media/anhengEncryptProduct.png';

import productFunction1 from  '../../../media/productFunction1.png';
import productFunction2 from  '../../../media/productFunction2.png';
import productFunction3 from  '../../../media/productFunction3.png';

import fitObject1 from  '../../../media/fitObject1.png';
import fitObject2 from  '../../../media/fitObject2.png';
import fitObject3 from  '../../../media/fitObject3.png';
import fitObject4 from  '../../../media/fitObject4.png';

import telephone from  '../../../media/telephone.png';

import productFeature from  '../../../media/productFeature.png';

import briefImg from  '../../../media/briefImg.png';

const {Component} = React;


class anhengEncrypt extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };

    handleClick = (e) => {
        console.log('Clicked: ', e.trim());
        if(e.toString().trim()==="anhengEncryptBrief"){
             window.scrollTo(0,550);
        }else if(e.toString().trim()==="anhengEncryptFunction"){
             window.scrollTo(0,1100);
        }else if(e.toString().trim()==="anhengEncryptFeature"){
             window.scrollTo(0,1500);
        }else if(e.toString().trim()==="anhengEncryptDeploy"){
             window.scrollTo(0,1850);
        }else if(e.toString().trim()==="anhengEncryptTelephone"){
             window.scrollTo(0,2700);
        }
            

    }

    render(){
        const {} = this.state;
        const {} = this.props;

        return(
            <div className="global-div-anheng-encrypt-ctl" >
                <div className="global-img-div-anheng-encrypt-ctl" >
                    <a target="_blank" href="https://www.dingtalk.com/">
                        <img src={anhengEncryptProduct} />
                    </a>
                </div>

                <div className="bar-div-anheng-encrypt-ctl" >
                    <Tabs 
                        defaultActiveKey="anhengEncryptBrief"
                        tabBarStyle={{height:"60px",width:"1060px",position:"relative",marginBottom:"0px",right:"350px"}} 
                        onTabClick={this.handleClick}>
                        <TabPane 
                            tab={
                                    <div className="bar-first-div-anheng-encrypt-ctl" >
                                        产品简介
                                    </div>
                               } 
                            key="anhengEncryptBrief">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-anheng-encrypt-ctl">
                                        产品功能
                                    </div>
                                } 
                            key="anhengEncryptFunction">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-anheng-encrypt-ctl">
                                        产品特色
                                    </div>
                                } 
                            key="anhengEncryptFeature">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-anheng-encrypt-ctl">
                                        部署方式
                                    </div>
                                } 
                            key="anhengEncryptDeploy">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-anheng-encrypt-ctl">
                                        咨询电话
                                    </div>
                                } 
                            key="anhengEncryptTelephone">
                        </TabPane>
                    </Tabs>
                    

                    <div className="clear-float-div-common"></div>
                </div>

                <div className="product-div-anheng-encrypt-ctl" >
                    <div className="title-all-div-common" style={{marginTop:"66px"}} >
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="anhengEncryptBrief">
                            <div className="title-brief-right-div-common" >
                                产品简介
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        安恒密盾是以钉钉聊天信息为对象的独立第三方加密解决方案。采用国密标准算法，让信息在传输、存储过程中都是加密状态，密文和密钥分离保存，除了信息所有者外，包括钉钉在内的任何第三方都无法查看，确保数据的安全性及私密性。
                    </div>

                    <div className="brief-div-anheng-encrypt-ctl" >
                        <img src={briefImg} />
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"66px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="anhengEncryptFunction">
                            <div className="title-brief-right-div-common" >
                                产品功能
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"44px"}}>
                        <div className="product-function-div-anheng-encrypt-ctl" >
                             <img src={productFunction1} />
                        </div>
                        <div className="product-function-div-anheng-encrypt-ctl" >
                             <img src={productFunction2} />
                        </div>
                        <div className="product-function-div-anheng-encrypt-ctl" >
                             <img src={productFunction3} />
                        </div>

                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common">
                        <div className="product-function-text-title-div-anheng-encrypt-ctl" style={{marginLeft:"140px"}}>
                             企业内部信息全面加密
                        </div>
                        <div className="product-function-text-title-div-anheng-encrypt-ctl" style={{marginLeft:"80px"}}>
                             离职人员无法解密消息
                        </div>
                        <div className="product-function-text-title-div-anheng-encrypt-ctl" style={{marginLeft:"135px"}}>
                             密钥可控
                        </div>

                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common">
                        <div className="product-function-text-div-anheng-encrypt-ctl" style={{marginLeft:"140px"}}>
                             支持文字、文件、语音、图片、视频等信息加密
                        </div>
                        <div className="product-function-text-div-anheng-encrypt-ctl" style={{marginLeft:"80px"}}>
                             离职人员无法解密在职期间的加密信息
                        </div>
                        <div className="product-function-text-div-anheng-encrypt-ctl" style={{marginLeft:"80px"}}>
                             企业管理员可进行密钥更新操作，从而获取新的密钥
                        </div>

                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"66px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="anhengEncryptFeature">
                            <div className="title-brief-right-div-common" >
                                产品特色
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="feature-div-anheng-encrypt-ctl" >
                        <img src={productFeature} />
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"66px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="anhengEncryptDeploy">
                            <div className="title-brief-right-div-common" >
                                部署方式
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-second-all-div-common" style={{marginTop:"46px"}}>
                        <div className="title-second-notify-div-common" >
                            *
                        </div>
                        <div className="title-second-brief-right-div-common" >
                            公有云服务
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"34px",}}>
                        密盾服务器和其他用户共享
                    </div>
                    <div className="content-div-common" style={{marginTop:"22px",fontWeight:"bold"}}>
                        特点
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px",}}>
                        此类部署方式方便，直接在钉钉应用中开通安恒密盾功能即可
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px",fontWeight:"bold"}}>
                        开通步骤
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        1安装注册钉钉
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        2企业管理员在钉钉中点击“工作”→“全部应用”→“安恒密盾”，按照指定步骤开通即可
                    </div>

                    <div className="title-second-all-div-common" style={{marginTop:"35px"}}>
                        <div className="title-second-notify-div-common" >
                            *
                        </div>
                        <div className="title-second-brief-right-div-common" >
                            私有化部署
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        需要部署用户专属的密盾服务器，由用户进行独立操作
                    </div>
                    <div className="content-div-common" style={{marginTop:"22px",fontWeight:"bold"}}>
                        特点：
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        密盾服务器独立专享；对密钥的可控性更好，阻断信息泄露风险
                    </div>
                    <div className="content-div-common" style={{marginTop:"22px",fontWeight:"bold"}}>
                        适用对象：
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        对信息安全有较高要求的行业和用户，如党政机关、公检法、企事业单位等重要部门
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"54px"}}>
                        <div className="fit-object-div-anheng-encrypt-ctl" >
                             <img src={fitObject1} />
                        </div>
                        <div className="fit-object-div-anheng-encrypt-ctl" >
                             <img src={fitObject2} />
                        </div>
                        <div className="fit-object-div-anheng-encrypt-ctl" >
                             <img src={fitObject3} />
                        </div>
                        <div className="fit-object-div-anheng-encrypt-ctl" >
                             <img src={fitObject4} />
                        </div>

                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"47px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="anhengEncryptTelephone">
                            <div className="title-brief-right-div-common" >
                                咨询电话
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"47px"}}>
                        <div className="telephone-div-anheng-encrypt-ctl" >
                             <img src={telephone} />
                        </div>
                        <div className="telephone-text-div-anheng-encrypt-ctl" >
                             私有化部署详情请询：0571-28313186
                        </div>

                        <div className="clear-float-div-common"></div>
                    </div>


                    <div className="clear-float-div-common"></div>
                </div>

                <div className="clear-float-div-common"></div>
            </div>
        )
    }
}

export default anhengEncrypt;