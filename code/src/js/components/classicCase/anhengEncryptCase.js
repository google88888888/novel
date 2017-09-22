/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';
import { Table ,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import '../../../css/components/classicCase/anhengEncryptCase.css';

import anhengEncryptCaseProduct from  '../../../media/anhengEncryptCaseProduct.png';
import anhengEncryptCaseImg1 from  '../../../media/anhengEncryptCaseImg1.png';
import anhengEncryptCaseImg2 from  '../../../media/anhengEncryptCaseImg2.png';
const {Component} = React;


class anhengEncryptCase extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    };

    

    render(){
        const {} = this.state;
        const {} = this.props;

        return(
            <div className="global-div-anheng-encrypt-case" >
                <div className="global-img-div-anheng-encrypt-case" >
                    <img src={anhengEncryptCaseProduct} />
                </div>


                <div className="product-div-anheng-encrypt-case" >
                    <div className="title-all-div-common" style={{marginTop:"66px"}} >
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <div className="title-brief-right-div-common" >
                           安恒密盾典型案例
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        目前越来越多的重要客户和行业开始使用钉钉的聊天功能，安恒密盾为钉钉聊天信息提供第三方数据加密解决方案。
                    </div>
                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        安恒密盾可以采用公有云服务或私有化部署方式。在公有云模式下，密盾服务器是与其他用户共享的，此类部署模式简便，无需繁琐操作。对那些在钉钉上的聊天数据加密要求比较高用户，可部署自己专用的密盾服务器，密盾私有化部署模式对密钥的可控性更高，能有效阻断信息泄露风险，适用于政府机关、公检法、重要领域的企事业单位。
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        2017年上半年，浙江省政府正式完成安恒密盾私有化实施。安恒密盾，基于钉钉开放接口，结合专业的信息安全经验，采用国密标准，是以第三方角色完成钉钉聊天消息的加密。聊天信息加密后保存在钉钉服务器上；加密密钥保存在安恒密盾服务器中，加密信息和加密密钥分开保存，聊天信息在传输和存储过程都是密文，“全程加密”，确保聊天信息不被第三方（包括钉钉）查看。
                    </div>

                    <div className="img-div-anheng-encrypt-case" >
                        <div className="img-item-div-anheng-encrypt-case" >
                            <img src={anhengEncryptCaseImg1} />
                        </div>
                        <div className="img-item-div-anheng-encrypt-case" >
                            <img src={anhengEncryptCaseImg2} />
                        </div>
                    </div>

                    <div className="clear-float-div-common"></div>
                </div>

                <div className="clear-float-div-common"></div>
            </div>
        )
    }
}

export default anhengEncryptCase;