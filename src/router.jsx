import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provder/zn_CN';
import React,{Component} from 'react';

class Router extends Component {
    render() {
        return (
            <LocaleProvider locale={zh_CN}></LocaleProvider>
        );
    }
}

export default Router;