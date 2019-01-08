import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    constructor(props) {
        super(props);
        this._updateTimeString = this._updateTimeString.bind(this);
        this.state = {
            timeString:''
        };
    }
    componentDidMount() {
        this._updateTimeString();
        this._timer = setInterval(
            this._updateTimeString,5000
        );
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }
    _updateTimeString() {
        const {comment} = this.props;
        const duration = (+Date.now() - comment.createdTime) / 1000;
        this.setState ({
            timeString:duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration,1))}秒前`
        });
    }
    render () {
        const {onDelete,index} = this.props;
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span 
                    onClick={()=>onDelete(index)}
                    className='comment-delete'
                >
                    删除
                </span>
            </div>
        );
    }
}
Comment.propTypes = {
    comment:PropTypes.object,
    onDelete:PropTypes.func,
    index:PropTypes.number
};
export default Comment;