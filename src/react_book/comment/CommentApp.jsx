import React, {Component} from 'react';
import CommentInput from './CommentInput.jsx';
import CommentList from './CommentList.jsx';

class CommentApp extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            commentList: []
        };
    }
    componentDidMount() {
        this._loadComments();
    }
    render() {
        return(
            <div className="commentWrapper">
                <CommentInput onSubmit={this.handleSubmit}/>
                <CommentList commentList={this.state.commentList} onDelete={this.handleDelete}/>
            </div>
        );
    }
    _loadComments() {
        let comments = localStorage.getItem('comments');
        if(comments) {
            comments = JSON.parse(comments);
            this.setState({commentList:comments});
        }
    }
    _saveComments(comments) {
        localStorage.setItem('comments',JSON.stringify(comments));
    }
    handleSubmit(value) {
        if(!value) return;
        if(!value.username) return alert('请输入用户名');
        if(!value.content) return alert('请输入评论内容');        
        let commentList = this.state.commentList;
        commentList.push(value);
        this.setState({
            commentList
        });
        this._saveComments(commentList);
    }
    handleDelete(index) {
        let {commentList} = this.state;
        commentList.splice(index,1);
        this.setState({
            commentList
        });
        this._saveComments(commentList);        
    }
}

export default CommentApp;