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
            dataEnd:"false",

        };
    }

    componentDidMount() {
        this.getData();
        this.getCatalog();
    }
    addTextColor(text){
        let self = this;
        let result = [];

        let otherText=text.split(self.state.searchOptions.title);
        for(let i=0;i<otherText.length-1;i++){
            result.push(
                <span key={i}>
                    {otherText[i]}
                    <span className="add-color-span-index">
                        {self.state.searchOptions.title}
                    </span>
                </span>
            )
        }
            result.push(
                <span key={otherText.length-1}>
                    {otherText[otherText.length-1]}
                </span>
            )

       
        return result
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
                if(this.state.pageOptions.page===0){
                    self.setState({
                        data :this.getTrueData(data.data),
                    })
                }else{
                    let dataAll=this.state.data;
                    let dataGot=this.getTrueData(data.data);
                    for(let i=0;i<dataGot.length;i++){
                        dataAll.push(dataGot[i]);
                    }
                    self.setState({
                        data :dataAll,
                    })

                }
                if(data.data.length<5){
                    self.setState({
                        dataEnd :"true",
                    })  
                }else{
                    self.setState({
                        dataEnd :"false",
                    })      
                }


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

    search(pageOptions,searchOptions){
        let self = this;
        self.setState({
            pageOptions :pageOptions,
            searchOptions :searchOptions,
        },function(){
            self.getData();
        })

    }

    getMoreData(){
        let self = this;
        let pageOptions = {
            page:this.state.pageOptions.page+1,
            pageSize:5,
        };
        self.setState({
            pageOptions :pageOptions,
        },function(){
            self.getData();
        })

    }

    getSpecifyData(id){
        let self = this;

        self.setState({
            pageOptions : {
                page:0,
                pageSize:5,
            },
            searchOptions:{
                type:0, 
                title:"",
                author:"", 
            },
        })

        let param={
            id:id, 
        }

        new RequestApi('post','/getSpecifyData',param,(data)=>{
            if(data.code!==200){
                message.error(data.msg);
            }else{
                let dataCopy=[];
                dataCopy.push(data.data);
                self.setState({
                    data :this.getTrueData(dataCopy),
                })
            }
        });

    }

   
    render() {
        const {data,catalog,dataEnd} = this.state;
        let self=this;
        return (
            
            <div className="App">
                <LogobarCtl 
                    search={self.search.bind(this)}
                />
                <div className="content-div-index">
                    <div className="main-list-div-index">
                        <MainCtl 
                            data={data}  
                            dataEnd={dataEnd}  
                            addTextColor={self.addTextColor.bind(this)}
                            getMoreData={self.getMoreData.bind(this)}
                        />
                    </div>  
                    <div className="catalog-list-div-index">
                        <CatalogCtl 
                            catalog={catalog}
                            search={self.search.bind(this)}
                            getSpecifyData={self.getSpecifyData.bind(this)}
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
