
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Todolist from './components/Todolist';
import Home from './components/Home'
import Login from './components/Login/Login'
import Shop from './components/FooterTabs/Shop'

const RouterWithRedux = connect()(Router);

class RouterComponent extends Component {

    render() {
        const TabIcon = ({ selected, title }) => {
            return (
                <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
            );
        }
        return (
            <RouterWithRedux>
                <Scene key="root">
                    <Scene key="Login" component={Login} title="Login" initial></Scene>

                    <Scene key="todolist" component={Todolist} title="Todo List"></Scene>

                    <Scene
                        key="tabbar"
                        tabs={true}
                        tabBarStyle={{ backgroundColor: '#FFFFFF' }}
                    >
                        <Scene key="home_tab" title="Home" icon={TabIcon}>
                            <Scene key="home" component={Home} title="Home" />
                        </Scene>
                        
                        <Scene key="shop_tab" title="Shop" icon={TabIcon}>
                            <Scene key="shop" component={Shop} title="Shop" />
                        </Scene>
                    </Scene>
                </Scene>
            </RouterWithRedux>
        );
    }
}

export default RouterComponent;