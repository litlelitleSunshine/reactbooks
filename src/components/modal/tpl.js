const tpl = `<div class="modal-wrapper modal">
    <div class="all-content">
    {{? it.title}}
        <h1>{{= it.title}}</h1>
    {{?}}
    {{? it.content}}
        <div class="content-wrapper">
            {{= it.content}}
        </div>
    {{?}}
    {{? it.showFooter}}
        <div class="foot-wrapper">
            {{? it.okText}}
                <button onclick={{= it.onOk}} class="ok-btn">{{= it.okText}}</button>
            {{??}}
                <button onclick={{= it.onOk}}  class="ok-btn">确定</button>
            {{?}}
            {{? it.cancelText}}
                <button onclick={{= it.onCancel}} class="cancel-btn">{{= it.cancelText}}</button>
            {{??}}
                <button onclick={{= it.onCancel}} class="cancel-btn">取消</button>
            {{?}}
        </div>
    {{?}}
    </div>
</div>`;

export default tpl;