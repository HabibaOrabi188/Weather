import * as React from 'react';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import Header from '../Components/Header';

import * as Style from '../App_Style/Style';

import {} from 'react-native-paper';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class SignUP extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        header_title: 'Sign Up to your account',
        UserName: '',
        eamil: '',
        Password: '',
        conPassword: '',
        PasswordBtn: true,
        conPasswordPtn: true,
        checkbox:false,
        mainBtn:false
      };
    }
  }


  

  

  render() {
    return (
      <View style={{flex: 1}}>
        <Header value={this.state.header_title}></Header>

        <ScrollView>

          <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
            <View style={Style.TextInput.mainView}>
              <View style={[Style.TextInput.titleView, {width: 80}]}>
                <Text style={{color: Style.mainFontColor}}>User name</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <TextInput
                  style={{marginLeft: 10}}
                  placeholder="Enter your name"
                  value={this.state.UserName}
                  onChangeText={value => {
                    this.setState({UserName: value});
                  }}
                />
              </View>
            </View>

            <View style={Style.TextInput.mainView}>
              <View style={[Style.TextInput.titleView, {width: 50}]}>
                <Text style={{color: Style.mainFontColor}}>Email</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
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

            <View style={Style.TextInput.mainView}>
              <View style={[Style.TextInput.titleView, {width: 70}]}>
                <Text style={{color: Style.mainFontColor}}>Password</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <TextInput
                  placeholder="Enter your password"
                  secureTextEntry={this.state.PasswordBtn}
                  value={this.state.Password}
                  onChangeText={value => {
                    this.setState({Password: value});
                  }}
                />

                <TouchableOpacity
                  style={{width: 50, height: 30, alignItems: 'center'}}
                  onPress={() => {
                    let ptn = !this.state.PasswordBtn;
                    this.setState({PasswordBtn: ptn});
                  }}>
                  <FeatherIcon
                    name={this.state.PasswordBtn ? 'eye-off' : 'eye'}
                    size={26}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={Style.TextInput.mainView}>
              <View
                style={[
                  Style.TextInput.titleView,
                  {
                    width: 120,
                  },
                ]}>
                <Text style={{color: Style.mainFontColor}}>
                  Confirm Password
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <TextInput
                  placeholder="Enter your password"
                  secureTextEntry={this.state.conPasswordPtn}
                  value={this.state.conPassword}
                  onChangeText={value => {
                    this.setState({conPassword: value});
                  }}
                />

                <TouchableOpacity
                  style={{width: 50, height: 30, alignItems: 'center'}}
                  onPress={() => {
                    let ptn = !this.state.conPasswordPtn;
                    this.setState({conPasswordPtn: ptn});
                  }}>
                  <FeatherIcon
                    name={this.state.conPasswordPtn ? 'eye-off' : 'eye'}
                    size={26}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                width: '90%',
                marginTop: 10,
              }}>
              <TouchableOpacity style={[Style.checkbox,{alignItems:'center',justifyContent:'center'}]}
              onPress={()=>{
                let btn=!this.state.checkbox
                this.setState({checkbox:btn})
              }}
              >
                {
                  this.state.checkbox?
                  <AntDesignIcon name='check' size={28}/>
                  :
                  null
                }
              </TouchableOpacity>
              <View style={{marginLeft: 5}}>
                <Text style={{color: Style.mainFontColor}}>
                  I accept & agree terms conditions
                </Text>
                <Text style={{color: Style.mainFontColor}}>
                  & privacy policy
                </Text>
              </View>
            </View>

            <TouchableOpacity style={Style.mainBotton.view}
            onPress={()=>{
              (this.state.Password&&this.state.conPassword&&this.state.UserName&&this.state.eamil).length==0?
              Alert.alert('There is a failer', 'Please check your data ', [
                {
                  text: 'Cancel',
                  onPress: () =>{
                    this.props.navigation.goBack()
                  },
                  style: 'cancel',
                },
                {text: 'OK', onPress: () =>{
                  
                  
                }},
                
              ]):
              this.props.navigation.navigate("Cities_Page")

            }}
            >
              <Text style={Style.mainBotton.font}>Sign Up</Text>
            </TouchableOpacity>


          </View>
        </ScrollView>
      </View>
    );
  }
}
