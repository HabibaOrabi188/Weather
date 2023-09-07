import * as React from 'react';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import axios from 'axios';

import * as Style from '../App_Style/Style';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Images from '../Constants/Images';

export default class Cities extends React.Component {
  componentDidMount = () => {
   // this.getdata();
  };

  constructor(props) {
    super(props);
    {
      this.state = {
        header_title: 'Sign in to your account',
        data: [],
        weatherData:[
          {
            city:'Cairo',
            Temperature:38,
            img:Images.Cairo
          },
          {
            city:'Alexandria',
            Temperature:36,
            img:Images.Alex
          },
          {
            city:'sharm-el-sheikh',
            Temperature:34,
            img:Images.sharm
          },
          {
            city:'Luxor',
            Temperature:36,
            img:Images.Luxor
          },

        ]
      };
    }
  }


  /*

  getdata() {
    axios.get('https://disease.sh/v2/countries?sort=cases').then(res => {
      if (res.status == 200) {
        if (res.data == 'Error') {
          alert('try again');
        } else if (typeof res.data == typeof []) {
          this.setState({data: res.data});
        }
      }
    });
  }

  */




  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <View
            style={Style.WeatherHeader.view}>
            <TouchableOpacity style={Style.WeatherHeader.botton}>
              <AntDesignIcon name="leftcircle" color={'#3636cd'} size={55} />
            </TouchableOpacity>

            <Text
              style={Style.WeatherHeader.font}>
              App Weather
            </Text>
          </View>

          <ScrollView>
            <View style={{width: '100%'}}>
              <FlatList
                data={this.state.weatherData}
                renderItem={({item, index}) => {
                  return (


                    <TouchableOpacity>

                      <ImageBackground
                        source={item.img}
                        imageStyle={{
                          borderTopRightRadius: 20,
                          borderTopLeftRadius: 20,
                        }}
                        resizeMode="stretch"
                        style={{
                          width: '100%',
                          height: 180,
                          borderRadius: 20,
                          marginTop: 10,
                        }}>

                        <View style={{margin: 10, flexDirection: 'row'}}>
                          
                          <FontAwesome5
                            name="cloud-sun-rain"
                            size={24}
                            color="#ffc700"
                          />

                          <Text
                            style={{
                              marginLeft: 10,
                              color: '#ff8862',
                              fontSize: 20,
                              fontWeight:'bold'
                            }}>
                            {item.Temperature}
                          </Text>
                        </View>
                      </ImageBackground>


                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          padding: 10,
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <FontAwesome6
                            name="location-dot"
                            size={30}
                            color="#ff8862"
                          />
                          <Text
                            style={{
                              marginLeft: 10,
                              fontSize: 18,
                              color: '#000',
                            }}>
                            {item.city}
                          </Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                          <AntDesignIcon
                            name="calendar"
                            size={24}
                            color="#ff8862"
                          />
                          <Text
                            style={{
                              marginLeft: 10,
                              fontSize: 18,
                              color: '#000',
                            }}>
                            2023-09-01
                          </Text>
                        </View>

                        
                      </View>
                    </TouchableOpacity>

                  );
                }}
              />
              
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
