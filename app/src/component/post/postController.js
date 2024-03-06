import React, { Component } from 'react';
import PostView from './postView';

class Post extends Component {
    render()
    {
        const t =  {title : "Test title", text :"Test text"};
        return (<PostView textTitlePost={t}/>);
    }
}

export default Post;
