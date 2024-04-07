import React, { Component, useEffect, useState } from 'react';
import PostView from './postView';
import { CreatePost, FetchAllPosts } from '../../entities/post/actions/postAction';
import { useDispatch } from 'react-redux'
import { getAuth } from "firebase/auth";

const Post = () => {
        const dispatch = useDispatch()
        useEffect(() => FetchAllPosts(dispatch))
        const t =  {title : "Test title", text :"Test text"};
        return (<PostView textTitlePost={t} createPost={(title,text) => { CreatePost(dispatch,{id:0,title,text,mail:"mail"}) }}/>);
}

export default Post;
