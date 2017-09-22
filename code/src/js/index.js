/**
 * Created by mengjiuxiang on 2017/4/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs,message } from 'antd';
import '../css/index.css';
import HomePage from './ctlComponents/homePageCtl';
import ProductCenter from './ctlComponents/productCenterCtl';
import ChannelPartner from './ctlComponents/channelPartnerCtl';
import ClassicCase from './ctlComponents/classicCaseCtl';
import AboutUs from './ctlComponents/aboutUsCtl';

import Bottom from "../libs/bottom/js/bottom";   

import Util from "../libs/util"; 
import '../libs/common.css';
import logo from '../media/logo.png';


const {Component} = React;
const TabPane = Tabs.TabPane;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appshow:"homePage",
            productCenterShow:"cloudEncrypt",
            classicCaseShow:"cloudEncryptCase",
            aboutUsShow:"companyBrief",
        };
    }

    componentDidMount() {
        let self=this;
        window.addEventListener('popstate', function(event) {

            if(event.state===null||event.state.appshow===null){
                self.setState({ 
                    appshow:"homePage",
                });
            }else{
                self.setState({ 
                    appshow:event.state.appshow,
                });

            }
            

        });
    }


    onChange(activeKey){
        history.pushState({
            appshow:activeKey
        },null,null);
        this.setState({ 
            appshow:activeKey,
        });


    }

    onChangeShow(appshow,contentShow){

        if(appshow==="homePage"){
            this.setState({ 
                appshow:appshow,
            });
        }else if(appshow==="productCenter"){
            this.setState({ 
                appshow:appshow,
                productCenterShow:contentShow,
            });
        }else if(appshow==="classicCase"){
            this.setState({ 
                appshow:appshow,
                classicCaseShow:contentShow,
            });
        }else if(appshow==="aboutUs"){
            this.setState({ 
                appshow:appshow,
                aboutUsShow:contentShow,
            });
        }

        history.pushState({
            appshow:appshow
        },null,null);



    }
    
    render() {
        const {appshow,productCenterShow,classicCaseShow,aboutUsShow} = this.state;
        let self=this;
        return (
            
            <div className="App">
                
                <Tabs defaultActiveKey="homePage" 
                    
                    tabBarStyle={{height:"60px",width:"1280px",margin:"0 auto"}} 

                    tabBarExtraContent={<div>
                        <img src={logo} style={{float:"left",height:"26px",marginLeft:"-1280px",marginTop:"17px"}}/>
                        <span style={{float:"left",height:"26px",lineHeight:"26px",marginLeft:"-1240px",marginTop:"17px"
                                      ,fontSize:"16px"}}>
                            杭州弗兰科信息安全科技有限公司
                        </span>
                    </div>}
                    
                    activeKey={appshow}

                    onChange={self.onChange.bind(self)}
                    >
                
                    <TabPane tab={<span><b>首页</b></span>} key="homePage">
                        <HomePage   
                            onChangeShow={self.onChangeShow.bind(self)}
                        />
                    </TabPane>
                    <TabPane tab={<span><b>产品中心</b></span>} key="productCenter">
                        <ProductCenter 
                            productCenterShow={productCenterShow} 
                            onChangeShow={self.onChangeShow.bind(self)}
                        />
                    </TabPane>
                    {/*<TabPane tab={<span><b>渠道伙伴</b></span>} key="channelPartner">
                        <ChannelPartner  />
                    </TabPane>*/}
                    <TabPane tab={<span><b>典型案例</b></span>} key="classicCase">
                        <ClassicCase  
                            onChangeShow={self.onChangeShow.bind(self)}
                            classicCaseShow={classicCaseShow} 
                        />
                    </TabPane>
                    <TabPane tab={<span><b>关于我们</b></span>} key="aboutUs">
                        <AboutUs  
                            onChangeShow={self.onChangeShow.bind(self)}
                            aboutUsShow={aboutUsShow} 
                        />
                    </TabPane>
                </Tabs>

                <Bottom 
                    onChangeShow={self.onChangeShow.bind(self)} 
                />


            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
