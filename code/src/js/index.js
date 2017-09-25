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
            data:[],
            catalog:[],

        };
    }

    componentDidMount() {
        this.getData();
        this.getCatalog();
    }

    getData(){
        let self = this;
        let param={

        }

        // new RequestApi('post','/v1/novel/getData',param,(data)=>{
        //     if(data.code!==200){
        //         message.error(data.msg);
        //     }else{
        //         self.setState({
        //             data :data.data,
        //         })
        //     }
        // });

        self.setState({
            data :mock.getData.data,
        })


    }

    getCatalog(){
        let self = this;
        let param={

        }

        // new RequestApi('post','/v1/novel/getCatalog',param,(data)=>{
        //     if(data.code!==200){
        //         message.error(data.msg);
        //     }else{
        //         self.setState({
        //             data :data.data,
        //         })
        //     }
        // });

        self.setState({
            catalog :mock.getCatalog.data,
        })


    }

   
    render() {
        const {data,catalog} = this.state;
        let self=this;
        return (
            
            <div className="App">
                <LogobarCtl />
                <div className="content-div-index">
                    <div className="main-list-div-index">
                        <MainCtl 
                            data={data}
                        />
                    </div>  
                    <div className="catalog-list-div-index">
                        <CatalogCtl 
                            catalog={catalog}
                        />
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
