/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';

import {Button,Tooltip,Icon,message,Carousel,Affix } from 'antd';

// import LeadTableRender from '../components/homePage/leadTableRender';
// import LeadCompanyInfo from '../../libs/companyInfo/js/companyInfo';

import '../../css/ctlComponents/homePageCtl.css';

import Util from "../../libs/util";   
import '../../libs/common.css';

import sound from '../../media/sound.png';
import newsInformationTitle from '../../media/newsInformationTitle.png';

import banner1 from '../../media/banner1.png';
import banner1More from '../../media/banner1More.png';
import banner2 from '../../media/banner2.png';
import banner2More from '../../media/banner2More.png';
import banner3 from '../../media/banner3.png';
import banner3More from '../../media/banner2More.png';

import lookMore from '../../media/lookMore.png';
import to from '../../media/to.png';

import typicalCustomer1 from '../../media/typicalCustomer/typicalCustomer1.png';
import typicalCustomer2 from '../../media/typicalCustomer/typicalCustomer2.png';
import typicalCustomer3 from '../../media/typicalCustomer/typicalCustomer3.png';
import typicalCustomer4 from '../../media/typicalCustomer/typicalCustomer4.png';
import typicalCustomer5 from '../../media/typicalCustomer/typicalCustomer5.png';
import typicalCustomer6 from '../../media/typicalCustomer/typicalCustomer6.png';
import typicalCustomer7 from '../../media/typicalCustomer/typicalCustomer7.png';
import typicalCustomer8 from '../../media/typicalCustomer/typicalCustomer8.png';
import typicalCustomer9 from '../../media/typicalCustomer/typicalCustomer9.png';
import typicalCustomer10 from '../../media/typicalCustomer/typicalCustomer10.png';

import typicalCustomer11 from '../../media/typicalCustomer/typicalCustomer11.png';
import typicalCustomer12 from '../../media/typicalCustomer/typicalCustomer12.png';
import typicalCustomer13 from '../../media/typicalCustomer/typicalCustomer13.png';
import typicalCustomer14 from '../../media/typicalCustomer/typicalCustomer14.png';
import typicalCustomer15 from '../../media/typicalCustomer/typicalCustomer15.png';
import typicalCustomer16 from '../../media/typicalCustomer/typicalCustomer16.png';
import typicalCustomer17 from '../../media/typicalCustomer/typicalCustomer17.png';
import typicalCustomer18 from '../../media/typicalCustomer/typicalCustomer18.png';
import typicalCustomer19 from '../../media/typicalCustomer/typicalCustomer19.png';
import typicalCustomer20 from '../../media/typicalCustomer/typicalCustomer20.png';

import typicalCustomer21 from '../../media/typicalCustomer/typicalCustomer21.png';
import typicalCustomer22 from '../../media/typicalCustomer/typicalCustomer22.png';
import typicalCustomer23 from '../../media/typicalCustomer/typicalCustomer23.png';
import typicalCustomer24 from '../../media/typicalCustomer/typicalCustomer24.png';
import typicalCustomer25 from '../../media/typicalCustomer/typicalCustomer25.png';
import typicalCustomer26 from '../../media/typicalCustomer/typicalCustomer26.png';
import typicalCustomer27 from '../../media/typicalCustomer/typicalCustomer27.png';
import typicalCustomer28 from '../../media/typicalCustomer/typicalCustomer28.png';
import typicalCustomer29 from '../../media/typicalCustomer/typicalCustomer29.png';
import typicalCustomer30 from '../../media/typicalCustomer/typicalCustomer30.png';

import typicalCustomer31 from '../../media/typicalCustomer/typicalCustomer31.png';
import typicalCustomer32 from '../../media/typicalCustomer/typicalCustomer32.png';
import typicalCustomer33 from '../../media/typicalCustomer/typicalCustomer33.png';
import typicalCustomer34 from '../../media/typicalCustomer/typicalCustomer34.png';
import typicalCustomer35 from '../../media/typicalCustomer/typicalCustomer35.png';
import typicalCustomer36 from '../../media/typicalCustomer/typicalCustomer36.png';
const {Component} = React;

class homePageCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerInfo:[
                "信阳***服装经销部",
                "广东***实业发展有限公司",
                "平江***食品店",
                "上海***美容有限公司",
                "陕西***信息技术有限公司",
                "南宁***商务有限公司",
                "信宜***房地产有限公司",
                "浙江***供应链管理有限公司",
                "***省生态环境监测监督管理局",
                "上海***医疗科技有限公司",
                "内蒙古***国际旅行社有限公司",
                "深圳***未来科技有限公司",
                "内蒙古***网络科技有限公司",
                "***文化传播有限公司",
                "石林***科技有限公司",
                "***集团有限公司",
                "甘肃***国际招标有限责任公司",
                "北京***联盟科技有限公司",
                "***工程咨询有限公司福建分公司",
                "***(北京)文化科技有限公司",
                "兰溪市***通讯设备经营部",
                "Encounter IT life",
                "上海***环境工程有限公司",
                "广州***箱包制品有限公司",
                "***金属制品有限公司",
                "潍坊***互联网技术有限公司",
                "江苏***国际贸易有限公司",
                "上海***教育科技有限公司",
                "上海***餐饮管理有限公司",
                "***市人力资源和社会保障局",
                "深圳***实业有限公司",
                "湖北***商贸有限公司",
                "中福***开发有限公司",
                "深圳***技术股份有限公司",
                "镇江***塑料工程有限公司",
                "中山***药业科技有限公司",
                "佛山***建材制品有限公司",
                "青岛***实业有限公司",
                "福建***建设工程有限公司",
                "辽宁市政***有限公司",
                "深圳***电子有限公司",
                "湖北***投资开发有限公司",
                "成都***信息技术有限公司",
                "南京***珠宝有限公司",
                "陕西***实业集团有限责任公司",
                "广东***设计有限公司",
                "山东***电力科技有限公司",
                "英科***有限公司",
                "天津***科技有限公司",
                "上海***餐饮管理有限公司",
                "贵州***工程有限公司",
                "宁德***房地产经纪有限公司",
                "潍坊***文化传媒有限公司",
                "杭州***文化传播有限公司",
                "郑州***电子科技有限公司",
                "上海***网络科技有限公司",
                "中奥***网络信息科技有限公司",
                "临沂***机械有限公司",
                "盐城***外语培训有限公司",
                "建德***灯饰有限公司",
                "宁夏***通用航空有限公司",
                "西安***风电技术有限公司",
                "上海***股权投资基金管理有限公司",
                "中铁***西北分公司",
                "杭州***液压机械有限公司",
                "北京***信息科技有限公司",
                "成都***通信有限公司",
                "江苏***国际旅行社有限公司",
                "大连***网络传媒有限公司",

            ],
            news:[{
                    date:"2017/8/25",
                    brief:"弗兰科信息官网于8月25日更新上线！"
                },{
                    date:"2017/6/21",
                    brief:"全美最大选民数据泄露：共和党所属数据公司意外泄漏近2……"
                },{
                    date:"2017/6/8",
                    brief:"2017高考热点关注：考生个人信息保护的重要性"
                },{
                    date:"2017/5/19",
                    brief:"弗兰科全体员工奔赴“富阳●新沙岛”举行团建活动"
                },{
                    date:"2017/4/25",
                    brief:"为什么“加密”已经成为董事会要考虑的问题"
                },{
                    date:"2017/4/21",
                    brief:"弗兰科“密信通V5.0”通过浙江省电子信息产品检验所软件测评"
                },{
                    date:"2017/4/15",
                    brief:"“云密盾”亮相“2017上海云计算大数据与安全研讨会”"
                },{
                    date:"2017/3/22",
                    brief:"弗兰科成为全国信息安全标准化技术委员会成员单位"
                }]

        };

    }


    onChangeShow(appshow,contentShow){
        this.props.onChangeShow(appshow,contentShow);
    }

    render() {
        const {customerInfo,news} = this.state;
        const {} = this.props;
        let self = this;
        let notifyTextHtml=[];
        for(let i=0;i<customerInfo.length;i++){
            notifyTextHtml.push(
                <div key={i}>
                    <div className="notify-carousel-text-div-home-page-ctl">
                        {customerInfo[i]+"购买了密盾加密服务"}
                    </div>
                </div>     
            )
        }

        let newsHtml=[];
        for(let i=0;i<news.length;i++){
            newsHtml.push( 
                <div key={i} className="news-information-content-item-self--div-home-page-ctl">
                    <div className="news-information-content-item-date--div-home-page-ctl">
                        {news[i].date}
                    </div>
                    <div className="news-information-content-item-brief--div-home-page-ctl">
                        {news[i].brief}
                    </div>
                    <div className="clear-float-div-common"></div>
                </div>
            )
        }
        let dingdingServiceHtml;
        //let weekSince=new Date("2017/08/7 00:00:00").getTime()/(1000*60*60*24*7);
        //let weekNow=new Date().getTime()/(1000*60*60*24*7);


        let weekBetween=(new Date().getTime()-new Date("2017/08/7 00:00:00").getTime())/(1000*60*60*24*7);

        if(parseInt(weekBetween)%2===0){
            dingdingServiceHtml=<a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=fiona2014">
                <div className="custom-service-dingding-div-home-page-ctl">
                </div>
            </a>
        }else{
            dingdingServiceHtml=<a target="_blank" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=13738196287">
                <div className="custom-service-dingding-div-home-page-ctl">
                </div>
            </a>   
        }

   
        return (
            <div className="global-div-home-page-ctl">
                <div className="bar-div-common">
                </div>   
                <div className="carousel-div-home-page-ctl">
                    <Carousel autoplay >
                        <div >
                            <div className="carousel-first-div-home-page-ctl">
                               
                                <div className="carousel-first-content-div-home-page-ctl" >
                                    <div className="carousel-first-more-content-div-home-page-ctl" onClick={self.onChangeShow.bind(self,"aboutUs","companyBrief")}>
                                        <img src={banner1More} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="carousel-second-div-home-page-ctl">
                                <div className="carousel-second-content-div-home-page-ctl">
                                    <div className="carousel-second-more-content-div-home-page-ctl" onClick={self.onChangeShow.bind(self,"productCenter","cloudEncrypt")}>
                                        <img src={banner2More} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="carousel-third-div-home-page-ctl">
                                <div className="carousel-third-content-div-home-page-ctl">
                                    <a target="_blank" href="https://www.dingtalk.com/">
                                        <div className="carousel-third-more-content-div-home-page-ctl" >
                                            <img src={banner3More} />
                                        </div>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                        
                    </Carousel>
                    <div className="wave-div-home-page-ctl">
                    </div>
                </div>

                <div className="main-div-home-page-ctl">
                    <div className="notify-div-home-page-ctl">
                        <img className="notify-img-div-home-page-ctl" src={sound} />
                        <div className="notify-text-div-home-page-ctl">
                            <Carousel autoplay vertical={true} dots={false} autoplaySpeed={700} >
                                {notifyTextHtml}
                            </Carousel>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="product-center-div-home-page-ctl">
                        <div className="product-center-img-home-page-ctl"> </div>
                    </div>

                    <div className="product-all-div-home-page-ctl">
                        <Button onClick={self.onChangeShow.bind(self,"productCenter","cloudEncrypt")}>
                            <div className="product-cloud-encrypt-div-home-page-ctl">
                                <div className="product-title-div-home-page-ctl">
                                        云密盾
                                </div>
                                <div className="product-info-div-home-page-ctl product-info-top-div-home-page-ctl">
                                    提供第三方的专业安全加密服务，让数据
                                </div>
                                <div className="product-info-div-home-page-ctl">
                                    在传输、存储过程中都是加密服务……
                                </div>
                                <img className="product-img-home-page-ctl" src={lookMore} />
                                <div className="clear-float-div-common"></div>
                            </div>
                            <div className="clear-float-div-common"></div>
                        </Button>
                        <Button style={{marginLeft:"10px"}} onClick={self.onChangeShow.bind(self,"productCenter","anhengEncrypt")}>
                            <div className="product-anheng-encrypt-div-home-page-ctl">
                                <div className="product-title-div-home-page-ctl">
                                    安恒密盾
                                </div>
                                <div className="product-info-div-home-page-ctl product-info-top-div-home-page-ctl">
                                    基于钉钉的独立第三方加密解决方案，包
                                </div>
                                <div className="product-info-div-home-page-ctl">
                                    括钉钉在内的任何第三方都无法查看……
                                </div>
                                <img className="product-img-home-page-ctl" src={lookMore} />
                                <div className="clear-float-div-common"></div>
                            </div>
                            <div className="clear-float-div-common"></div>
                        </Button>
                        <Button style={{marginLeft:"10px"}} onClick={self.onChangeShow.bind(self,"productCenter","mixintong")}>
                            <div className="product-encrypt-connect-div-home-page-ctl">
                                <div className="product-title-div-home-page-ctl">
                                    加密通信
                                </div>
                                <div className="product-info-div-home-page-ctl product-info-top-div-home-page-ctl">
                                    满足用户工作需要的加密即时通信软件，
                                </div>
                                <div className="product-info-div-home-page-ctl">
                                    可以根据客户需求做定制化开发……
                                </div>
                                <img className="product-img-home-page-ctl" src={lookMore} />
                                <div className="clear-float-div-common"></div>
                            </div>
                            <div className="clear-float-div-common"></div>
                        </Button>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="cloud-div-home-page-ctl">
                        <div className="cloud-first-div-home-page-ctl"> 
                            云密盾，第三方数据安全加密解决方案
                        </div>
                        <div className="cloud-second-div-home-page-ctl"> 
                            无论传输或存储过程，确保数据的安全和私密
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="cloud-introduce-div-home-page-ctl">
                        <div className="cloud-introduce-img-div-home-page-ctl"> 
                        </div>
                        <div className="cloud-introduce-text-div-home-page-ctl"> 
                            云密盾采用国密算法，提供第三方的专业安全加密服务，让数据在传输、存储过程中都确保是加密状态，除了数据所有者，任何第三方，包括服务商在内都无法查看；确保数据的安全和私密
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                    
                    <div className="clear-float-div-common"></div>
                </div>

                <div className="cloud-series-background-div-home-page-ctl">
                    <div className="cloud-series-div-home-page-ctl">
                        <div className="cloud-series-first-div-home-page-ctl"> 
                            云密盾系列产品
                        </div>
                        <div className="cloud-series-second-div-home-page-ctl"> 
                            不同业务场景，有不同结合方式
                        </div>

                        <div className="cloud-series-introduce-div-home-page-ctl">
                            <div className="cloud-series-introduce-text-div-home-page-ctl"> 
                                <div className="cloud-series-introduce-all-text-div-home-page-ctl"> 
                                    云密盾针对内容加密，实现密文传输，密文存储，并支持在密文状态下的业务处理。根据不同业务场景，有不同结合方式
                                </div>
                                <div className="cloud-series-introduce-content-text-div-home-page-ctl"> 
                                    <img src={to} className="cloud-series-introduce-content-text-img-home-page-ctl" />

                                    <div className="cloud-series-introduce-content-text-right-div-home-page-ctl"> 
                                        sdk加密试用的场景
                                    </div>
                                    <div className="clear-float-div-common"></div>
                                </div>
                                <div className="cloud-series-introduce-content-text-bottom-div-home-page-ctl"> 
                                    以客户端APP为特征的应用，如各类客户端、移动应用APP
                                </div>

                                <div className="cloud-series-introduce-content-text-div-home-page-ctl"> 
                                    <img src={to} className="cloud-series-introduce-content-text-img-home-page-ctl" />

                                    <div className="cloud-series-introduce-content-text-right-div-home-page-ctl"> 
                                        web加密使用的场景
                                    </div>
                                    <div className="clear-float-div-common"></div>
                                </div>
                                <div className="cloud-series-introduce-content-text-bottom-div-home-page-ctl"> 
                                    通过浏览器/H5形式访问的各种应用服务
                                </div>

                                <div className="cloud-series-introduce-content-text-div-home-page-ctl"> 
                                    <img src={to} className="cloud-series-introduce-content-text-img-home-page-ctl" />

                                    <div className="cloud-series-introduce-content-text-right-div-home-page-ctl"> 
                                        数据库加密使用的场景
                                    </div>
                                    <div className="clear-float-div-common"></div>
                                </div>
                                <div className="cloud-series-introduce-content-text-bottom-div-home-page-ctl"> 
                                    对原有数据库有加密需求，需要加密存储的
                                </div>
                                <div className="clear-float-div-common"></div>
               
                            </div>
                            <div className="cloud-series-introduce-img-div-home-page-ctl"> 
                            </div>

                            <div className="clear-float-div-common"></div>
                        </div>


                        <div className="clear-float-div-common"></div>
                    </div>
                </div>

                <div className="main-div-home-page-ctl">
                    <div className="news-information-div-home-page-ctl">
                        <div className="news-information-img-home-page-ctl"> </div>
                    </div>

                    <div className="news-information-content-div-home-page-ctl">
                        <div className="news-information-content-main-div-home-page-ctl">
                            <div className="news-information-content-title-div-home-page-ctl">
                                浙江省政府正式完成“安恒密盾”私有化部署实施
                            </div>
                            <div className="news-information-content-text-div-home-page-ctl">
                                云计算浪潮扑面而来，钉钉成为一个工作方式。这是一款为企业量身打造的统一办公通讯免费平台，从此，企业进入零成本高效移动办公时代。日前，“互联网+政务”一直领跑全国的浙江省也再次发力，决定全省政务统一部署移动办公（钉钉）系统，提高行政决策效率，助力“最多跑一次”改革……
                            </div>

                            <div className="news-information-content-background-div-home-page-ctl">
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>

                        <div className="news-information-content-item-div-home-page-ctl">
                            {newsHtml}
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>


                    
                    <div className="clear-float-div-common"></div>
                </div>

                <div className="typical-customer-background-div-home-page-ctl">
                    <div className="typical-customer-div-home-page-ctl">
                        <div className="typical-customer-img-out-div-home-page-ctl"> 
                            <div className="typical-customer-img-div-home-page-ctl"> </div>
                        </div>
                        
                        <div className="typical-customer-carousel-div-home-page-ctl">
                            <Carousel autoplay >
                                <div >
                                    <div className="typical-customer-carousel-page-div-home-page-ctl">
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer1} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer2} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer3} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer4} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer5} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer6} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer7} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer8} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer9} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer10} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer11} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer12} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer13} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer14} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer15} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer16} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer17} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer18} />
                                        </div>
                                
                                    </div>
                                </div>
                                <div >
                                    <div className="typical-customer-carousel-page-div-home-page-ctl">
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer19} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer20} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer21} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer22} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer23} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer24} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer25} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer26} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer27} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer28} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer29} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer30} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer31} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer32} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer33} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer34} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer35} />
                                        </div>
                                        <div className="typical-customer-carousel-item-div-home-page-ctl">
                                            <img src={typicalCustomer36} />
                                        </div>
                                    </div>
                                </div>
                                
                            </Carousel>
                        </div>



                        <div className="clear-float-div-common"></div>
                    </div>
                    <div className="clear-float-div-common"></div>
                </div>

    

                <div className="custom-service-div-home-page-ctl">
                    <div className="custom-service-text-div-home-page-ctl">
                        在线客服
                    </div>
                    {dingdingServiceHtml}

                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2939981731&site=qq&menu=yes">
                        <div className="custom-service-qq-div-home-page-ctl">    
                        </div>
                    </a>
                    <div className="clear-float-div-common"></div>
                </div>
            </div>
            
        )
    }
}

export default homePageCtl;