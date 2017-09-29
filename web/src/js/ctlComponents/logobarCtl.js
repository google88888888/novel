/**
 * Created by mengjiuxiang on 2017/4/14.
 */


import React from 'react';

import { Form, Button ,Input,Row,message,Select,DatePicker } from 'antd';
const FormItem = Form.Item;
import '../../css/ctlComponents/logobarCtl.css';

import Util from "../../libs/util";   
import * as Name from "../../libs/name";
import '../../libs/common.css';

const {Component} = React;

class logobarCtl extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    handleSearch = (e) => {
        e.preventDefault();
        let pageOptions={
            page:0,
            pageSize:5,
        };
        let searchOptions={
            type:0, 
            title:"",
            author:"", 
        };
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (!err) {
                searchOptions.title=values.condition===undefined?"":values.condition; 
                searchOptions.author=values.condition===undefined?"":values.condition; 
            }
        });

        this.props.search(pageOptions,searchOptions);
    };

    render() {
        const {} = this.state;
        const {} = this.props;
        const { getFieldDecorator } = this.props.form;
        let self = this;

   
        return (
            <div className="global-div-logo-bar-ctl">
                <div className="logo-div-logo-bar-ctl">
                    {Name.logo}
                </div>
                <div className="search-div-logo-bar-ctl">
                    <Form layout="inline" onSubmit={this.handleSearch}>
                        <div className="search-condition-div-logo-bar-ctl">
                            {getFieldDecorator('condition', {})(
                                <Input placeholder="标题，作者" className="search-condition-antd-input-logo-bar-ctl" />
                            )}
                        </div>
                        <div className="search-button-div-logo-bar-ctl">
                            <Button
                                style={{width:"90px",height:"30px"}}
                                type="primary"
                                htmlType="submit"
                            >
                                搜索
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            
        )
    }
}

export default Form.create()(logobarCtl);