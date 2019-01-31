import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment.jsx';

class CommentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {onDelete,commentList} = this.props;
        return(
            <div>
                {
                    commentList && commentList.length ? commentList.map((comment,index)=>{
                        return <Comment key={index} comment={comment} onDelete={onDelete}/>;
                    }) : null
                }
            </div>
        );
    }
}
CommentList.propTypes = {
    commentList:PropTypes.array,
    onDelete:PropTypes.func
};

export default CommentList;