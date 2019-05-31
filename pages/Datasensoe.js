import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class Datasensoe extends Component {
  render() {
    return (
      <Container>
        
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://uppic.cc/d/KgtK'}} />
                <Body>
                  <Text>Sensor</Text>
                  <Text note>May 23, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://uppic.cc/d/K37m'}} style={{height:300, width: 400, flex: 1}}/>
                <Text>
                Digital Temperature and Humidity Sensor
                 Adafruit Industries LLC
                 The DHT22 is a basic digital temperature and humidity sensor. 
                 It uses a capacitive humidity sensor and a thermistor to measure the surrounding air,
                and spits out a digital signal on the data pin, no analog input pins needed.     
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
      
    );
  }
}