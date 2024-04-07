import React, { useState } from 'react';
import '../../index.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Button, Input } from 'antd';
import _ from 'lodash';

const { Meta } = Card;

const PostView = (props) => {
        const [title, setTitle] = useState(props.textTitlePost.title);
        const [description, setDescription] = useState(props.textTitlePost.text);

        return (
        <Card
        style={{ alignContent: 'center', justifyContent: 'center'}}
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
            title={props.textTitlePost.title}
            description={props.textTitlePost.text}
            />
            <Input onChange={(e) => setTitle(e.target.value)} value={title}/>
            <Input onChange={(e) => setDescription(e.target.value)} value={description}/>
            <Button type="primary" onClick={()=> props.createPost(title,description)}>Primary Button</Button>
   
        </Card>
        );
}

export default PostView;
