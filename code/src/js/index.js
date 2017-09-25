/**
 * Created by mengjiuxiang on 2017/4/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs,message } from 'antd';
import '../css/index.css';
import LogobarCtl from './ctlComponents/logobarCtl';
import MainCtl from './ctlComponents/mainCtl';
import CatalogCtl from './ctlComponents/catalogCtl';   

import Util from "../libs/util"; 
import * as mock from "../libs/mockData"; 
import '../libs/common.css';

const {Component} = React;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainData:[],
            

        };
    }

    componentDidMount() {
        this.getMainData();
    }

    getMainData(){
        let self = this;
        let param={

        }

        // new RequestApi('post','/v1/novel/getMainData',param,(data)=>{
        //     if(data.code!==200){
        //         message.error(data.msg);
        //     }else{
        //         self.setState({
        //             data :data.data,
        //         })
        //     }
        // });

        self.setState({
            mainData :mock.getMainData.data,
        })


    }

   
    render() {
        const {} = this.state;
        let self=this;
        return (
            
            <div className="App">
                <LogobarCtl />
                <div className="content-div-index">
                    <div className="main-list-div-index">
                        <MainCtl />
                    </div>  
                    <div className="catalog-list-div-index">
                        <CatalogCtl />
                    </div> 
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
