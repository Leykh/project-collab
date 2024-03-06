import React, { Component } from 'react';
import '../../index.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import _ from 'lodash';

const { Meta } = Card;

class PostView extends Component {
    render(){
        return (
        <Card
        style={{ alignContent: 'center', justifyContent: 'center'}}
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title={this.props.textTitlePost.title}
            description={this.props.textTitlePost.text}
            />
        </Card>
        );
    }
}

export default PostView;
