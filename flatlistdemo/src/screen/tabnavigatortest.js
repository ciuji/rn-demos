import React,{Component} from 'react';
import {StatusBar} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import Color from "../common/Color";
import TabBarItemComponent from "./TabBarItemComponent";
import HomeScreen from './HomePages';
import MineScreen from './MinePages';


export default class tabnavigatortest extends Component{
  constructor(props){
    super(props);
  //  StatusBar.setBarStyle('light-content')
  }

  render(){
    return (
        <Navigator/>
    )
  }
}

const Tab = TabNavigator(
	{
		Home:{
      screen:HomeScreen,
      navigationOptions:({navigation})=>({
        tabBarLabel:'',
        tabBarIcon:({focused,tintColor})=>(//给按钮配置图片
          <TabBarItemComponent
            tintColor={tintColor}
            focused={focused} 
            normalImage={require('../../assets/image/playing.png')}
            selectedImage={require('../../assets/image/playing-active.png')}
          />
        )
      }),
    },

    Second:{
      screen:MineScreen,
      navigationOptions:({navigation})=>({
        tabBarLebel:'hello',
        title:'haha',
        tabBarIcon:({focused,tintColor})=>(
          <TabBarItemComponent
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../../assets/image/coming.png')}
            selectedImage={require('../../assets/image/coming-active.png')}
          />
        )
      }),
    },
  },

   {
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:true,
    animationEnabled:false,
    lazy:true,
    tabBarOptions:{
      activeTintColor:'#06c1ae',
      inactiveTintColor:'#979797',
      style:{backgroundColor:'#ffffff',},
      labelStyle:{
      fontSize:10
      },
    }
  }  
);


const Navigator = StackNavigator(
  {
    Tab:{screen: Tab}
  },
  {
    navigationOptions:{
      headerBackTitle:null,
      headerTintColor:'#ffffff',
      headerStyle:{backgroundColor:'#06c1ae'},
      showIcon:true
    }
  }
);