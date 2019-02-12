import doT from 'dot';
import doTTpl from './tpl';
import $ from 'jquery';


class Modal {
    constructor(root,data) {
        this.index = 100;
        // 挂载节点
        this.root = root;
        // 输入数据
        this.data = data;
        // 是否挂载完成
        this.hasInit = false;
        return this;
    }
    // 挂载弹窗
    init() {
        if(!this.root) return;
        this.root.prepend(doT.template(doTTpl)(this.data));
        this.hasInit = true;
        this.modal = $('.modal-wrapper');        
        // 绑定事件
        const okBtn = $('.ok-btn');
        const cancelBtn = $('.cancel-btn');
        // 底部按钮滑动效果
        okBtn.on('mouseover mouseout',function(e) {
            if(e.type === 'mouseover')  $(this).css('opacity',0.8);
            if(e.type === 'mouseout') $(this).css('opacity',1);            
        });
        cancelBtn.hover(function() {
            $(this).css('opacity',0.8);
        },function() {
            $(this).css('opacity',1); 
        });
        // 点击事件
        okBtn.on('click',()=>{
            if(this.data.onOk && typeof this.data.onOk === 'function') {
                this.data.onOk();
            } else{
                this.destory();                
            }
        });
        cancelBtn.on('click',()=>{
            if(this.data.onCancel && typeof this.data.onCancel === 'function') {
                this.data.onOk();
            } else{
                this.destory();
            }
        });
        // 链式操作
        return this;
    }
    show() {
        if(!this.hasInit) {
            this.init();
        }
        this.modal.css('z-index',this.index);
        this.modal.fadeIn();
        return this;
    }
    destory() {
        this.modal.remove();
    }
}

export default Modal;