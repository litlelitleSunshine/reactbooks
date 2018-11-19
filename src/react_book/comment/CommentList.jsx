import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment.jsx';

class CommentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {
                    this.props.commentList.map((comment,index)=>{
                        return <Comment key={index} comment={comment}/>;
                    })
                }
            </div>
        );
    }
}
CommentList.propTypes = {
    commentList:PropTypes.array
};

export default CommentList;