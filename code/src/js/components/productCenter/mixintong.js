/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';
import { Table ,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import '../../../css/components/productCenter/mixintong.css';
import mixintongProduct from  '../../../media/mixintongProduct.png';

import mixintongAdvantage1 from  '../../../media/mixintongAdvantage1.png';
import mixintongAdvantage2 from  '../../../media/mixintongAdvantage2.png';
import mixintongAdvantage3 from  '../../../media/mixintongAdvantage3.png';
import mixintongAdvantage4 from  '../../../media/mixintongAdvantage4.png';


import mixintongFeature1 from  '../../../media/mixintongFeature1.png';
import mixintongFeature2 from  '../../../media/mixintongFeature2.png';
import mixintongFeature3 from  '../../../media/mixintongFeature3.png';
import mixintongFeature4 from  '../../../media/mixintongFeature4.png';
import mixintongFeature5 from  '../../../media/mixintongFeature5.png';


import mixintongBrief from  '../../../media/mixintongBrief.png';

const {Component} = React;


class mixintong extends Component {
    constructor(props){
        super(props);
        this.state = {
 
        };
    };

    handleClick = (e) => {
        console.log('Clicked: ', e.trim());
        if(e.toString().trim()==="mixintongBrief"){
             window.scrollTo(0,550);
        }else if(e.toString().trim()==="mixintongAdvantage"){
             window.scrollTo(0,1400);
        }else if(e.toString().trim()==="mixintongFunction"){
             window.scrollTo(0,2050);
        }
            

    }

    render(){
        const {} = this.state;
        const {} = this.props;

        return(
            <div className="global-div-mixintong-ctl" >
                <div className="global-img-div-mixintong-ctl" >
                    <img src={mixintongProduct} />
                </div>

                <div className="bar-div-mixintong-ctl" >
                    <Tabs 
                        defaultActiveKey="mixintongBrief"
                        tabBarStyle={{height:"60px",width:"1060px",position:"relative",marginBottom:"0px",right:"650px"}} 
                        onTabClick={this.handleClick}>
                        <TabPane 
                            tab={
                                    <div className="bar-first-div-mixintong-ctl" >
                                        产品简介
                                    </div>
                                } 
                            key="mixintongBrief">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-mixintong-ctl">
                                        技术优势
                                    </div>
                               } 
                            key="mixintongAdvantage">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-mixintong-ctl">
                                        特色功能
                                    </div>
                                } 
                            key="mixintongFunction">
                        </TabPane>
                       
                    </Tabs>
                    

                    <div className="clear-float-div-common"></div>
                </div>

                <div className="product-div-mixintong-ctl" >
                    <div className="title-all-div-common" style={{marginTop:"66px"}} >
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="mixintongBrief">
                            <div className="title-brief-right-div-common" >
                                产品简介
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        密信通是弗兰科公司云密盾加密技术在移动即时通信领域的具体产品实践。重要领域用户对即时通信的信息安全需求日趋强烈，公司运用加密核心技术，推出了满足用户工作沟通专属加密即时通信产品。
                    </div>
                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        密信通系统由密钥分发及管理、消息服务、加密通话、数据库等部件组成，支持各类安卓和IOS智能终端。不同于传统的SSL VPN、HTTPS等安全传输协议，密信通采用了“全程加密”技术，明文进入终端即刻完成国密算法高强度加密，数据密文传输加密、本地密文存储、服务器端密文存储和密文转发，确保信息不泄露，在提高用户工作效率的同时能确保通信数据的安全。
                    </div>

                    <div className="brief-div-mixintong-ctl" >
                        <img src={mixintongBrief} />
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        依托密信通标准产品基线，根据使用对象个性需要，我们还交付了应急通、市委通、“和密信”等个性化产品。市委通、应急通专门服务某地市委工作需要，突出加密通信和加密通话功能，强化了管理员席位；“和密信”为运营商定制，服务于需要注重信息安全的集团客户。密信通产品已获国家商用密码产品型号证书，功能丰富、产品成熟，广泛应用于党委、政府、事业单位、金融等各项领域。
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"66px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="mixintongAdvantage">
                            <div className="title-brief-right-div-common" >
                                技术优势
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"44px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongAdvantage1} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                全程加密
                            </div>
                            <div className="show-img-text-down-div-common" >
                                所有聊天信息端到端全程加密，密文传输、密文存储转发；终端及服务器端所有数据加密保存，确保数据安全。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongAdvantage2} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                密钥管理
                            </div>
                            <div className="show-img-text-down-div-common" >
                                可为每个用户单位灵活自己专属的通信平台，根据需要密钥管理模块可与通信平台分离部署，密钥与密文分离，满足较高等级的信息安全要求。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongAdvantage3} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                国密标准
                            </div>
                            <div className="show-img-text-down-div-common" >
                                综合运用SM2/SM3/SM4国密算法，产品获得国密系列证书。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongAdvantage4} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                产品成熟
                            </div>
                            <div className="show-img-text-down-div-common" >
                                系统稳定可靠，已经投入规模化商用，得到了市场长足的检验；通信模块功能丰富，体验流畅；产品支持安卓和IOS全系列终端。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                   


                    <div className="title-all-div-common" style={{marginTop:"66px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="mixintongFunction">
                            <div className="title-brief-right-div-common" >
                                特色功能
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>


                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongFeature1} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                加密通话
                            </div>
                            <div className="show-img-text-down-div-common" >
                                密信通用户之间拨打的是加密电话，采用端到端的“一话一密”技术，任何第三方都无法获得密钥，无法监听通话内容。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongFeature2} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                加密聊天
                            </div>
                            <div className="show-img-text-down-div-common" >
                                单聊和群聊功能，支持文本、语音、小视频、图片、名片、收藏、记事本、日程提醒、位置等格式的消息发送；支持消息撤回；发送消息可以设置”普通消息”或”阅后删除”；可感知已读未读。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongFeature3} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                公告及订阅
                            </div>
                            <div className="show-img-text-down-div-common" >
                                系统提供单位管理员操作席位，可发布单位公告、会议通知，可实时获知发送消息的阅读情况；提供订阅频道功能，方便发布行业新闻等阅读消息。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongFeature4} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                机构通讯录
                            </div>
                            <div className="show-img-text-down-div-common" >
                                成员实名制，由管理员完成通讯录的编写和更新；通讯录由服务器端下发给终端，单位通讯录能够快速、便捷同步给单位的领导和每位成员，减少自己录入工作通讯录的工作量。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={mixintongFeature5} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                契合工作需要
                            </div>
                            <div className="show-img-text-down-div-common" >
                                管理员可加密发送各类office文件、日程提醒给出差的领导查阅，完成领导行程的提醒；管理员可将员工需要经常阅读的电子文档上传至“公共文件”中，方便成员随时随地阅读。丰富的个性功能使密信通成为高效工作必不可少之利器。
                            </div>
                            <div className="clear-float-div-common"></div>
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

export default mixintong;