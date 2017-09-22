/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';
import { Table ,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import '../../../css/components/classicCase/cloudEncryptCase.css';

import cloudEncryptCaseProduct from  '../../../media/cloudEncryptCaseProduct.png';
import cloudEncryptCaseImg from  '../../../media/cloudEncryptCase.png';
const {Component} = React;


class cloudEncryptCase extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    };

    

    render(){
        const {} = this.state;
        const {} = this.props;

        return(
            <div className="global-div-cloud-encrypt-case" >
                <div className="global-img-div-cloud-encrypt-case" >
                    <img src={cloudEncryptCaseProduct} />
                </div>


                <div className="product-div-cloud-encrypt-case" >
                    <div className="title-all-div-common" style={{marginTop:"66px"}} >
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <div className="title-brief-right-div-common" >
                            云密盾典型案例
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        云密盾以独立第三方角色为各类SaaS应用、Web应用及移动应用完成端到端数据加密，使数据从终端、传输到服务器端都是以密文存在，确保重要客户部署在云上、在外网中的应用系统的数据安全，杜绝信息外泄。
                    </div>
                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        深圳市某局为了响应主管部门的要求，提高机关工作效率，将原有在内外中的办公系统延伸至外网，以移动终端接入应用平台，打造“掌上移动OA”系统。这种办公系统部署结构的变化，必将带来信息外泄的风险。从2017年初开始，深圳某局为了保障其移动办公系统的信息安全，采用了弗兰科云密盾技术，完成了应用数据的全程加密，密钥与密文数据分离保存；密钥管理服务器部署在内网中，对密钥也做了较好的保护。
                    </div>

                    <div className="img-div-cloud-encrypt-case" >
                        <img src={cloudEncryptCaseImg} />
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        另外，弗兰科云密盾技术已经服务于福建某公安移动警务系统、华东某检察院等机关单位的移动OA平台，为在公网环境下的重要工作平台加上了数据“保险箱”。
                    </div>



                    <div className="clear-float-div-common"></div>
                </div>

                <div className="clear-float-div-common"></div>
            </div>
        )
    }
}

export default cloudEncryptCase;