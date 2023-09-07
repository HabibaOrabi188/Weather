import * as React from 'react';
import { useContext } from 'react';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import Images from '../Constants/Images';

import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import *as StyleApp from '../App_Style/Style'

const Header=(props)=>{
    return(
        <>
        <View style={{height: '32%', width: '100%'}}>
            <ImageBackground
            imageStyle={{borderBottomLeftRadius:40}}
              style={{height: '100%', width: '100%',}}
              resizeMode="stretch"
              source={Images.background}>

                <TouchableOpacity style={StyleApp.header.botton}>

                    <AntDesignIcon name='leftcircle'color={'#b7bae4'} size={55}/>
                </TouchableOpacity>
              <Text
                style={StyleApp.header.font}>
                   {(props.value)}
              </Text>
            </ImageBackground>
          </View>
        
        </>
    )

}
export default Header;