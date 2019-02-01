import React, {Component} from 'react';

import {getLocalStorage,setLocalStorage} from '../tool';

import CommentInput from './CommentInput.jsx';
import CommentList from './CommentList.jsx';

class CommentApp extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            update: false
        };
    }
    componentDidMount() {
        this._loadComments();
    }
    render() {
        const commentList = this._loadComments();
        return(  
            <div className="commentWrapper">
                <CommentInput onSubmit={this.handleSubmit}/>
                <CommentList commentList={commentList} onDelete={this.handleDelete}/>
            </div>
        );
    }
    _loadComments() {
        let comments = getLocalStorage('comments');
        return comments ? comments : [];
    }
    _saveComments(comments) {
        setLocalStorage('comments',comments);
    }
    handleSubmit(value) {
        if(!value) return;
        if(!value.username) return alert('请输入用户名');
        if(!value.content) return alert('请输入评论内容');        
        let commentList = this._loadComments();
        commentList.push(value);
        // 更新render
        this.setState({
            update:true
        });
        this._saveComments(commentList);
    }
    handleDelete(index) {
        let commentList = this._loadComments();
        commentList.splice(index,1);
        this.setState({
            update:true
        });
        this._saveComments(commentList);        
    }
}

export default CommentApp;