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

import {RequestApi,typeNumToStr} from "../libs/util"; 
import * as mock from "../libs/mockData"; 
import '../libs/common.css';

const {Component} = React;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            catalog:[],
            pageOptions : {
                page:0,
                pageSize:5,
            },
            searchOptions:{
                type:0, 
                title:"",
                author:"", 
            },

        };
    }

    componentDidMount() {
        this.getData();
        this.getCatalog();
    }

    getData(){
        let self = this;
        let param={
            page:this.state.pageOptions.page,
            pageSize:this.state.pageOptions.pageSize,

            type:this.state.searchOptions.type, 
            title:this.state.searchOptions.title, 
            author:this.state.searchOptions.author, 
        }

        new RequestApi('post','/getData',param,(data)=>{
            if(data.code!==200){
                message.error(data.msg);
            }else{
                self.setState({
                    data :this.getTrueData(data.data),
                })
            }
        });

        // self.setState({
        //     data :this.getTrueData(mock.getData0.data),
        // })


    }
    getTrueData(data){
        for(var i=0;i<data.length;i++){
            //data[i].key=i; 
            data[i].type=typeNumToStr(data[i].type);
        };
        return data;
    }
    
    getCatalog(){
        let self = this;
        let param={
        }

        new RequestApi('post','/getCatalog',param,(data)=>{
            if(data.code!==200){
                message.error(data.msg);
            }else{
                self.setState({
                    catalog :this.getTrueData(data.data),
                })
            }
        });


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
