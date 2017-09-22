/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';
import { Table ,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import '../../../css/components/productCenter/cloudEncrypt.css';
import cloudEncryptProduct from  '../../../media/cloudEncryptProduct.png';

import feature1 from  '../../../media/feature1.png';
import feature2 from  '../../../media/feature2.png';
import feature3 from  '../../../media/feature3.png';

import clientSdk from  '../../../media/clientSdk.png';
import businessServer from  '../../../media/businessServer.png';
const {Component} = React;


class cloudEncrypt extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };

    handleClick = (e) => {
        console.log('Clicked: ', e.trim());
        if(e.toString().trim()==="cloudEncryptBrief"){
             window.scrollTo(0,550);
        }else if(e.toString().trim()==="cloudEncryptFeature"){
             window.scrollTo(0,750);
        }else if(e.toString().trim()==="cloudEncryptPlan"){
             window.scrollTo(0,1050);
        }
            

    }

    render(){
        const {} = this.state;
        const {} = this.props;

        return(
            <div className="global-div-cloud-encrypt-ctl" >
                <div className="global-img-div-cloud-encrypt-ctl" >
                    <img src={cloudEncryptProduct} />
                </div>

                <div className="bar-div-cloud-encrypt-ctl" >
                    <Tabs 
                        defaultActiveKey="cloudEncryptBrief"
                        tabBarStyle={{height:"60px",width:"1060px",position:"relative",marginBottom:"0px",right:"650px"}} 
                        onTabClick={this.handleClick}
                        >
                        
                        <TabPane 
                            tab={
                                    <div className="bar-first-div-cloud-encrypt-ctl" >
                                        产品简介
                                    </div>
                               } 
                            key="cloudEncryptBrief">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-cloud-encrypt-ctl">
                                        产品特色
                                    </div>
                                } 
                            key="cloudEncryptFeature">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-cloud-encrypt-ctl">
                                        部署方案
                                    </div>
                                } 
                            key="cloudEncryptPlan">
                        </TabPane>
                    </Tabs>
                    

                    <div className="clear-float-div-common"></div>
                </div>

                <div className="product-div-cloud-encrypt-ctl" >
                    <div className="title-all-div-common" style={{marginTop:"66px"}} >
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="cloudEncryptBrief">
                            <div className="title-brief-right-div-common" >
                                产品简介
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        云密盾采用国密算法，提供第三方的专业安全加密服务，让数据在传输、存储过程中都确保是加密状态，除了数据所有者，任何第三方，包括服务商在内都无法查看；确保数据的安全和私密。
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"66px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="cloudEncryptFeature">
                            <div className="title-brief-right-div-common" >
                                产品特色
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"44px"}}>
                        <div className="product-feature-div-cloud-encrypt-ctl" >
                             <img src={feature1} />
                        </div>
                        <div className="product-feature-div-cloud-encrypt-ctl" >
                             <img src={feature2} />
                        </div>
                        <div className="product-feature-div-cloud-encrypt-ctl" >
                             <img src={feature3} />
                        </div>

                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"66px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="cloudEncryptPlan">
                            <div className="title-brief-right-div-common" >
                                部署方案
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-second-all-div-common" style={{marginTop:"46px"}}>
                        <div className="title-second-notify-div-common" >
                            *
                        </div>
                        <div className="title-second-brief-right-div-common" >
                            客户端SDK加密效果图
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="sdk-div-cloud-encrypt-ctl" >
                        <img src={clientSdk} />
                    </div>

                    <div className="content-div-common" style={{marginTop:"75px",fontWeight:"bold"}}>
                        适用场景：
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        适用于CRM、IM及各种手机、PC的客户端应用。
                    </div>

                    <div className="content-div-common" style={{marginTop:"75px",fontWeight:"bold"}}>
                        特点：
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        1. 在客户端应用中内嵌SDK，无需其他操作；
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        2. 实现从端到端的全过程加解密，密文传输、密文存储，确保任何第三方都无法查看信息，保障信息与数据的安全性及私密性。
                    </div>


                    <div className="title-second-all-div-common" style={{marginTop:"46px"}}>
                        <div className="title-second-notify-div-common" >
                            *
                        </div>
                        <div className="title-second-brief-right-div-common" >
                            业务服务器加密效果图
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="business-server-div-cloud-encrypt-ctl" >
                        <img src={businessServer} />
                    </div>

                    <div className="content-div-common" style={{marginTop:"75px",fontWeight:"bold"}}>
                        适用场景：
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        1. 提供对公服务的各类政府网站和平台，如：社保公积金、公务员考试网等；
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        2. 各种平台应用集成的H5应用，如：以微信服务号提供的企业服务、对公服务等。
                    </div>

                    <div className="content-div-common" style={{marginTop:"25px",fontWeight:"bold"}}>
                        特点：
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        1.需要在应用服务器部署加密系统；
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        2.支持加密状态下的搜索和业务应用，不影响业务开展；
                    </div>
                    <div className="content-div-common" style={{marginTop:"25px"}}>
                        3.实现从端对端的全过程加解密；密文传输、密文存储，确保任何任何第三方都无法查看信息，保障信息与数据的安全性及私密性。
                    </div>






                    <div className="clear-float-div-common"></div>
                </div>

                <div className="clear-float-div-common"></div>
            </div>
        )
    }
}

export default cloudEncrypt;