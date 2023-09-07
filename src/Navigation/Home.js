import * as React from 'react';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import Header from '../Components/Header';

import * as Style from '../App_Style/Style';

import Images from '../Constants/Images';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        header_title: 'Sign Up to your account',
      };
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          resizeMode="stretch"
          source={Images.background}>
          <Text
            style={[
              Style.header.font,
              {
                marginTop: 150,
                alignSelf: 'center',
                marginLeft: 90,
                textAlign: 'center',
              },
            ]}>
            Welcome to Weather App
          </Text>

          <TouchableOpacity
            style={{
              width: '90%',
              height: 60,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#ddd',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 60,
            }}
            onPress={()=>{
                this.props.navigation.navigate("Login")
            }}
            >
            <Text style={{color: '#3636cd', fontSize: 18, fontWeight: '700'}}>
              Sign in
            </Text>
          </TouchableOpacity>

          <Text
            style={[Style.header.font, {alignSelf: 'center', marginLeft: 100}]}>
            Or
          </Text>

          <TouchableOpacity
            style={{
              width: '90%',
              height: 60,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#ddd',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
            }}
            onPress={()=>{
                this.props.navigation.navigate("SignUP")
            }}
            
            >
            <Text style={{color: '#3636cd', fontSize: 18, fontWeight: '700'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
