import React, {Component} from 'react';
import CommentInput from './CommentInput.jsx';
import CommentList from './CommentList.jsx';

class CommentApp extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            commentList: []
        };
    }
    render() {
        return(
            <div className="commentWrapper">
                <CommentInput onSubmit={this.handleSubmit}/>
                <CommentList commentList={this.state.commentList}/>
            </div>
        );
    }
    handleSubmit(value) {
        let commentList = this.state.commentList;
        commentList.push(value);
        this.setState({
            commentList
        });
    }
}

export default CommentApp;