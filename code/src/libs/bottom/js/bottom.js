/**
 * Created by mengjiuxiang on 2017/4/14.
 */

import React from 'react';
import { Icon ,Form ,formItemLayout,Input,Button,Select,message,Popover} from 'antd';
import '../css/bottom.css';
import Util from "../../util";  
import weibo from '../../../media/weibo.png';
import weixin from '../../../media/weixin.png';
const {
    Component
} = React;

class bottom extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        };
    };

    onChangeShow(appshow,contentShow){
        this.props.onChangeShow(appshow,contentShow);
    }

    render(){
        let self=this;
        const {} = this.props;

        const weiboQRContent = (
            <div>
                <div className="weibo-qr-div-bottom">
                </div>
            </div>
        );
        const weixinQRContent = (
            <div>
                <div className="weixin-qr-div-bottom">
                </div>
            </div>
        );
        return(
            <div className="background-div-bottom">
                <div className="show-div-bottom">
                    <div className="show-up-div-bottom"> 
                        <div className="show-up-img-div-bottom"> 
                        </div>
                        <div className="show-up-generalize-div-bottom"> 
                            <div className="show-up-item-title-div-bottom"> 
                                <div className="show-up-item-left-div-bottom"> 
                                    |
                                </div>
                                <div className="show-up-item-right-div-bottom"> 
                                    概括
                                </div>
                                <div className="clear-float-div-common"></div>
                            </div>

                            <div className="show-up-item-div-bottom hand-out-div-bottom" onClick={self.onChangeShow.bind(self,"aboutUs","companyBrief")}> 
                                公司简介
                            </div>
                            {/*<div className="show-up-item-div-bottom hand-out-div-bottom"> 
                                资质荣誉
                            </div>
                            <div className="show-up-item-div-bottom hand-out-div-bottom"> 
                                公司文化
                            </div>
                            <div className="show-up-item-div-bottom hand-out-div-bottom"> 
                                新闻中心
                            </div>*/}
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="show-up-product-div-bottom"> 
                            <div className="show-up-item-title-div-bottom"> 
                                <div className="show-up-item-left-div-bottom"> 
                                    |
                                </div>
                                <div className="show-up-item-right-div-bottom"> 
                                    产品中心
                                </div>
                                <div className="clear-float-div-common"></div>
                            </div>
                            <div className="show-up-item-div-bottom hand-out-div-bottom" onClick={self.onChangeShow.bind(self,"productCenter","cloudEncrypt")}> 
                                云密盾
                            </div>
                            <div className="show-up-item-div-bottom hand-out-div-bottom" onClick={self.onChangeShow.bind(self,"productCenter","anhengEncrypt")}> 
                                安恒密盾
                            </div>
                            <div className="show-up-item-div-bottom hand-out-div-bottom" onClick={self.onChangeShow.bind(self,"productCenter","mixintong")}> 
                               加密通信
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="show-up-cooperate-div-bottom"> 
                            <div className="show-up-item-title-div-bottom"> 
                                <div className="show-up-item-left-div-bottom"> 
                                    |
                                </div>
                                <div className="show-up-item-right-div-bottom"> 
                                    对外合作
                                </div>
                                <div className="clear-float-div-common"></div>
                            </div>

                            <div className="show-up-item-div-bottom hand-out-div-bottom" onClick={self.onChangeShow.bind(self,"classicCase","cloudEncryptCase")}> 
                                典型案例
                            </div>
                            {/*<div className="show-up-item-div-bottom"> 
                                渠道伙伴
                            </div>*/}
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="show-up-connect-div-bottom"> 
                            <div className="show-up-item-title-div-bottom"> 
                                <div className="show-up-item-left-div-bottom"> 
                                    |
                                </div>
                                <div className="show-up-item-right-div-bottom"> 
                                    联系方式
                                </div>
                                <div className="clear-float-div-common"></div>
                            </div>
                            <div className="show-up-connect-item-phone-div-bottom"> 
                                公司电话
                            </div>
                            <div className="show-up-connect-item-phone-number-div-bottom"> 
                                0571-86767159
                            </div>
                            <div className="show-up-connect-item-email-div-bottom"> 
                                邮箱：fulanke@hzflk.com
                            </div>
                            <div className="show-up-connect-item-address-div-bottom"> 
                                地址：浙江省杭州市滨江区西兴街道滨盛路1505号银丰大厦1801室
                            </div>
                            <div className="show-up-connect-item-us-div-bottom"> 
                                <div className="show-up-connect-item-us-text-div-bottom"> 
                                    关注我们
                                </div>
                                <Popover content={weixinQRContent} placement="top">
                                    <div className="show-up-connect-item-us-img-div-bottom"> 
                                        <img src={weixin} />
                                    </div>
                                </Popover>
                                <Popover content={weiboQRContent}   placement="top">
                                    <div className="show-up-connect-item-us-img-div-bottom"> 
                                        <img src={weibo} />
                                    </div>
                                </Popover>
                                <div className="clear-float-div-common"></div>
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>
                    <div className="show-down-div-bottom">
                        <div className="show-down-record-div-bottom">
                            <div className="show-down-record-left-div-bottom">
                                浙ICP备12010166号-9
                            </div>
                            <div className="show-down-record-img-div-bottom">
                            </div>
                            <div className="show-down-record-right-div-bottom">
                                浙公安备33010802003829
                            </div>
                            <div className="clear-float-div-common"></div>
                        </div>

                        <div className="show-down-version-div-bottom">
                            版权所有：杭州弗兰科信息安全科技有限公司
                        </div>
                    </div>
                    <div className="clear-float-div-common"></div>
                </div>
            </div>
        )
    }
}

export default bottom;