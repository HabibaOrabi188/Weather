import * as React from 'react';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
} from 'react-native';

import Header from '../Components/Header';

import Icons from '../Constants/Icons';

import {} from 'react-native-paper';
import * as Style from '../App_Style/Style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        header_title: 'Sign in to your account',
        eamil: '',
      };
    }
  }

  Social_Icon(img) {
    return (
      <>
        <TouchableOpacity style={Style.social_Icon}>
          <Image
            style={{width: 40, height: 40}}
            resizeMode="contain"
            source={img}
          />
        </TouchableOpacity>
      </>
    );
  }

  render() {
    return (
      <>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Header value={this.state.header_title}></Header>

          {/*                              Email              */}

          <View style={Style.TextInput.mainView}>
            <View style={[Style.TextInput.titleView, {width: 50}]}>
              <Text style={{color: '#000'}}>Email</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <AntDesignIcon name="mail" size={26} color="#000" />
              <TextInput
                style={{marginLeft: 10}}
                placeholder="Enter your email"
                value={this.state.eamil}
                onChangeText={value => {
                  this.setState({eamil: value});
                }}
              />
            </View>
          </View>

          {/*                              PassWord             */}

          <View style={Style.TextInput.mainView}>
            <View style={[Style.TextInput.titleView, {width: 70}]}>
              <Text style={{color: Style.mainFontColor}}>Password</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <FeatherIcon name="lock" size={26} color="#000" />
              <TextInput
                placeholder="Enter tour password"
                style={{marginLeft: 10}}
                value={this.state.Password}
                onChangeText={value => {
                  this.setState({Password: value});
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: 160,
              height: 60,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: Style.mainFontColor,
                fontSize: 17,
                marginTop: 5,
              }}>
              Forget password ?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.mainBotton.view}
            onPress={() => {
              (this.state.Password && this.state.eamil).length == 0
                ? Alert.alert('There is a failer', 'Please check your data ', [
                    {
                      text: 'Cancel',
                      onPress: () => {
                        this.props.navigation.goBack();
                      },
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => {}},
                  ])
                : this.props.navigation.navigate('Cities_Page');
            }}>
            <Text style={Style.mainBotton.font}>Sign In</Text>
          </TouchableOpacity>

          <View
            style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
            <View
              style={{
                width: '40%',
                height: 1,
                backgroundColor: '#cccccc',
              }}></View>
            <Text
              style={{
                marginLeft: 5,
                marginRight: 5,
                fontSize: 20,
                marginBottom: 4,
                color: Style.mainFontColor,
              }}>
              or
            </Text>
            <View
              style={{
                width: '40%',
                height: 1,
                backgroundColor: '#cccccc',
              }}></View>
          </View>

          <View
            style={{
              width: '75%',
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {this.Social_Icon(Icons.google)}

            {this.Social_Icon(Icons.facebook)}

            {this.Social_Icon(Icons.twitter)}
          </View>
        </View>
      </>
    );
  }
}
