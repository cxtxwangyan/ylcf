import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar, Platform, NativeModules
} from 'react-native';

import TabNavigator from "react-native-tab-navigator";
import IconFont from 'react-native-vector-icons/Ionicons'

import Home from "./app/components/Home/Home";
import My from './app/components/My/My'
import Order from './app/components/Order/Order'
import ShangJia from './app/components/ShangJia/ShangJia'
//获取信息栏高度,并在样式设置padding-top等于信息栏高度
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home' // 默认选中的tab标签
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} barStyle={'dark-content'} />
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title='home'
            renderIcon={() => <IconFont name={'ios-home'} size={25} color={'gray'} />}
            renderSelectedIcon={() => <IconFont name={'ios-home'} size={25} color={'#0079ff'} />}
            onPress={() => this.setState({ selectedTab: 'home' })}
          >
            <Home />
          </TabNavigator.Item>


          <TabNavigator.Item
            selected={this.state.selectedTab === 'shangjia'}
            title='shangjia'
            renderIcon={() => <IconFont name={'ios-map'} size={25} color={'gray'} />}
            renderSelectedIcon={() => <IconFont name={'ios-map'} size={25} color={'#0079ff'} />}
            onPress={() => this.setState({ selectedTab: 'shangjia' })}
          >
            <ShangJia />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'order'}
            title='order'
            renderIcon={() => <IconFont name={'ios-list'} size={25} color={'gray'} />}
            renderSelectedIcon={() => <IconFont name={'ios-list'} size={25} color={'#0079ff'} />}
            onPress={() => this.setState({ selectedTab: 'order' })}
          >
            <Order />
          </TabNavigator.Item>



          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title='my'
            renderIcon={() => <IconFont name={'ios-person'} size={25} color={'gray'} />}
            renderSelectedIcon={() => <IconFont name={'ios-person'} size={25} color={'#0079ff'} />}
            onPress={() => this.setState({ selectedTab: 'my' })}
          >
            <My />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT
  },

});