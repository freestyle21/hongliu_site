import './index.less'

import React, {Component, PropTypes} from 'react'
import { Form, Input, Button, message } from 'antd';


class Online extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    handleSubmit() {
        message.info('待开发, 稍等片刻')
        return false;
    }

    render() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };

        return (
            <div className="online">
                <div className="content-title">
                    在线报名
                </div>
                <div className="content-item">
                    <div className="content-item-title"></div>
                    <div className="content-item-content">
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <Form.Item
                              {...formItemLayout}
                              label="姓名:"
                            >
                              {
                                <Input type="text" placeholder="请输入名字" {...getFieldProps('name')} />
                              }
                            </Form.Item>
                            <Form.Item
                              {...formItemLayout}
                              label="电话:"
                            >
                              {
                                <Input type="text" placeholder="请输入电话号码" {...getFieldProps('password')}/>
                              }
                            </Form.Item>

                            <Form.Item
                              {...formItemLayout}
                              label="QQ:"
                            >
                              {
                                <Input type="text" placeholder="请输入QQ" {...getFieldProps('qq')}/>
                              }
                            </Form.Item>
                            <div className="content-item-controller">
                                <Button type="primary" htmlType="submit">提交</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form.create()(Online)
