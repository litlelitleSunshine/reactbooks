import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.handleContent = this.handleContent.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            username: '',
            content: ''
        };
    }
    // 不依赖DOM的数据可以在此生命周期函数中处理,但不会再次触发渲染，一般放在componentDidMount里面
    UNSAFE_componentWillMount() {
        const username = localStorage.getItem('username');
        if(username) this.setState({username});
    }
    componentDidMount() {
        this.textarea.focus();
    }
    render() {
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onChange={this.handleUsername}
                            onBlur={this.handleBlur}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleContent}
                            ref={(textarea)=>this.textarea = textarea}                            
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        发布
                    </button>
                </div>
            </div>
        );
    }
    handleContent(e) {
        this.setState({
            content: e.target.value
        });
    }
    handleUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    handleSubmit() {
        if(this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime:+new Date()
            });
        }
    }
    handleBlur(e) {
        localStorage.setItem('username',e.target.value);   
    }
}
CommentInput.propTypes = {
    onSubmit:PropTypes.func
};

export default CommentInput;