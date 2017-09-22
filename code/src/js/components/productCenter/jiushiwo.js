/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';
import { Table ,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import '../../../css/components/productCenter/jiushiwo.css';
import jiushiwoProduct from  '../../../media/jiushiwoProduct.png';


import jiushiwoFeature1 from  '../../../media/jiushiwoFeature1.png';
import jiushiwoFeature2 from  '../../../media/jiushiwoFeature2.png';
import jiushiwoFeature3 from  '../../../media/jiushiwoFeature3.png';
import jiushiwoFeature4 from  '../../../media/jiushiwoFeature4.png';
import jiushiwoFeature5 from  '../../../media/jiushiwoFeature5.png';
import jiushiwoFeature6 from  '../../../media/jiushiwoFeature6.png';
import jiushiwoFeature7 from  '../../../media/jiushiwoFeature7.png';

const {Component} = React;


class jiushiwo extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };

    handleClick = (e) => {
        console.log('Clicked: ', e.trim());
        if(e.toString().trim()==="jiushiwoBrief"){
             window.scrollTo(0,550);
        }else if(e.toString().trim()==="jiushiwoFeature"){
             window.scrollTo(0,900);
        }
            

    }

    render(){
        const {} = this.state;
        const {} = this.props;

        return(
            <div className="global-div-jiushiwo-ctl" >
                <div className="global-img-div-jiushiwo-ctl" >
                    <img src={jiushiwoProduct} />
                </div>

                <div className="bar-div-jiushiwo-ctl" >
                    <Tabs 
                        defaultActiveKey="jiushiwoBrief"
                        tabBarStyle={{height:"60px",width:"1060px",position:"relative",marginBottom:"0px",right:"800px"}} 
                        onTabClick={this.handleClick}>
                        <TabPane 
                            tab={
                                    <div className="bar-first-div-jiushiwo-ctl" >
                                        产品简介
                                    </div>
                                } 
                            key="jiushiwoBrief">
                        </TabPane>
                        <TabPane 
                            tab={
                                    <div className="bar-item-div-jiushiwo-ctl">
                                        产品特点
                                    </div>
                                } 
                            key="jiushiwoFeature">
                        </TabPane>
                       
                    </Tabs>
                    

                    <div className="clear-float-div-common"></div>
                </div>

                <div className="product-div-jiushiwo-ctl" >
                    <div className="title-all-div-common" style={{marginTop:"66px"}} >
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="jiushiwoBrief">
                            <div className="title-brief-right-div-common" >
                                产品简介
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        “就是我”是弗兰科公司为公安客户打造的一款用于保障国家级重大活动顺利举办的移动应急指挥系统。以行动代号作为产品名称，足以说明客户对该系统的信息安全有着极高的要求。
                    </div>
                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        “就是我”要求能将通信能力快速部署到参加行动的各方成员的多种型号的移动终端上，“召之即来、来之能战、战之能胜”；快速组建各类工作小组和战斗团队；在移动网络的覆盖下，结合指挥大屏，能实时知道兵力分布所处的地理位置；能对小组成员的通信进行舆情观察；成员可随时上报自己值守点的情况和工作报告，指挥员可随时进行指挥和处置、兵力调度、任务下发等工作，及时、准确、高效。
                    </div>


                    <div className="title-all-div-common" style={{marginTop:"66px"}}>
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <a name="jiushiwoFeature">
                            <div className="title-brief-right-div-common" >
                                产品特点
                            </div>
                        </a>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"44px"}}>
                        <div className="show-img-div-common" >
                             <img src={jiushiwoFeature1} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                信息安全有保障
                            </div>
                            <div className="show-img-text-down-div-common" >
                                系统采用异地冗余部署，运用全方位的信息安全加密技术；用户实名注册，信息和数据的流动处于一个可控可管的闭环环境中。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={jiushiwoFeature2} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                快速组建团队
                            </div>
                            <div className="show-img-text-down-div-common" >
                                管理员可以按照组织架构、工作分工、项目性质等多维度创建通讯录； 成员间也可以根据需要组建临时群体。快速组队，便捷查找。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={jiushiwoFeature3} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                强大的协同能力
                            </div>
                            <div className="show-img-text-down-div-common" >
                                系统提供了强大的协同工作能力。签到、通知、指令、请示、报告等功能，适应各种协同需要，信息瞬间达到，准确高效。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={jiushiwoFeature4} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                人员调度指挥
                            </div>
                            <div className="show-img-text-down-div-common" >
                                支持终端位置数据实时提取，人员位置和部署情况在指挥大屏上一目了然，指挥员可根据实战需要，进行人员统一调度。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                   
                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={jiushiwoFeature5} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                完善的管理平台
                            </div>
                            <div className="show-img-text-down-div-common" >
                                管理员可实时生产上报统计报表，提交工作报告；发布群发公告；授权后的管理者可以监看不同群组的群情舆情。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={jiushiwoFeature6} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                各类终端通用
                            </div>
                            <div className="show-img-text-down-div-common" >
                                产品支持各类普通移动智能终端，快速上线，使用便捷，节省时间和资金。
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                    <div className="title-all-div-common" style={{marginTop:"36px"}}>
                        <div className="show-img-div-common" >
                             <img src={jiushiwoFeature7} />
                        </div>
                        <div className="show-img-text-all-div-common" >
                            <div className="show-img-text-up-div-common" >
                                经历实战洗礼
                            </div>
                            <div className="show-img-text-down-div-common" >
                                产品经受了高标准严要求的重大战役的实战考验，稳定可靠。“就是我”服务2016 G20杭州峰会， 助力保障单位圆满完成大会各项安保任务。
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

export default jiushiwo;