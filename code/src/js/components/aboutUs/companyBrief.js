/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';
import { Table ,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import '../../../css/components/aboutUs/companyBrief.css';
import companyBriefProduct from  '../../../media/companyBriefProduct.png';

const {Component} = React;


class companyBrief extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };

    

    render(){
        const {} = this.state;
        const {} = this.props;

        return(
            <div className="global-div-company-brief" >
                <div className="global-img-div-company-brief" >
                    <img src={companyBriefProduct} />
                </div>


                <div className="product-div-company-brief" >
                    <div className="title-all-div-common" style={{marginTop:"66px"}} >
                        <div className="title-notify-div-common" >
                            |
                        </div>
                        <div className="title-brief-right-div-common" >
                            公司简介
                        </div>
                        <div className="clear-float-div-common"></div>
                    </div>

                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        杭州弗兰科信息安全科技有限公司（以下简称“弗兰科信息”）是全球网络安全500强企业——安恒信息旗下公司，成立于2010年，坐落在美丽的杭州西子湖畔。弗兰科信息以国家级高新技术产业开发区为依托，秉承着“诚信、敬业、责任、创新”的企业精神，创造卓越、实现超越的经营理念，坚持“客户第一”的价值观，以“让移动信息更安全”为使命。
                    </div>
                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        弗兰科信息致力于移动信息安全产品与数据加密服务的研究与开发，在移动信息安全与数据加密的核心技术方面已经具备领先优势。一直以来，弗兰科信息都坚持为用户提供全面的移动信息安全解决方案，帮助用户解决各种云服务（含SAAS)的数据安全问题。目前弗兰科信息产品已广泛服务于党委、政府、公安、事业单位、金融等各个重要领域，并为2016年杭州G20峰会的安保工作提供加密通信保障服务。
                    </div>
                    <div className="content-div-common" style={{marginTop:"44px",textIndent:"36px"}}>
                        弗兰科信息拥有完整而独立的知识产权，已获多项国家专利证书和软件著作权，是国家商用密码管理局指定的商密产品生产定点单位和商密产品销售定点单位，同时也是全国信息安全标准化技术委员会成员单位。
                    </div>
                    <div className="clear-float-div-common"></div>
                </div>

                <div className="clear-float-div-common"></div>
            </div>
        )
    }
}

export default companyBrief;