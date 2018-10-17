/**
* @flow
*/
'use strict';

var MarvelInfoView = require('MarvelInfoView');
var React = require('react');
var View = require('View');
var {Text} = require('F8Text');
var F8Touchable = require('F8Touchable');
var StyleSheet = require('StyleSheet');
var ToolbarAndroid = require('ToolbarAndroid');
var Image = require('Image');
var {windowWidth} = require('constant');
var Linking = require('Linking');
var MarvelHeader = require('MarvelHeader');
var Platform = require('Platform');

import Hyperlink from 'react-native-hyperlink';
import Share from 'react-native-share';


const shield = require('../img/shieldcolor.png');

class AboutContentView extends React.Component {
  handleIconClicked: () => void;
  onShare: () => void;

  constructor(props: any) {
    super(props);
    this.handleIconClicked = this.handleIconClicked.bind(this);
    this.onShare = this.onShare.bind(this);
  }

  handleIconClicked() {
    this.context.openDrawer();
  }

  onShare() {
    Share.open({
          share_text: "Marvel App",
          share_URL: "https://github.com/EduardoAugusto2015/marvel_react_native",
          title: "Marvel App"
        }, (e) => {

    });
  }

  render() {
    var head;
    if(Platform.OS === 'android') {
      head = <MarvelHeader title={'ABOUT'} leftItem={{icon: shield, onPress: this.handleIconClicked}} foreground='light' style={{backgroundColor: 'rgb(168, 31, 26)'}}/>
    } else {
      head = <MarvelHeader title={'ABOUT'} foreground='dark' style= {{backgroundColor: 'rgb(168, 31, 26)'}}/>;
    }

    return (
      <View style={{flex:1, flexDirection:'column',}}>
        {head}
        <Image
          source={require('../img/about_marvel_logo.png')}
          style={{width:windowWidth, height:200}}
        />
        <Text style={styles.description}>
          App react-native desenvolvido para leitura da API Marvel, nele você consegue fazer buscar dos heróis marvel.
        </Text>
        <F8Touchable style={styles.item}>
          <View style={{flexDirection:'row'}}>
            <Hyperlink linkStyle={{color:'#2980b9'}} onPress={(url) => Linking.openURL(url)}>
              <Text style={styles.itemtext}>
                  Github: https://github.com/EduardoAugusto2015/marvel_react_native
              </Text>
            </Hyperlink>
          </View>
        </F8Touchable>
        <F8Touchable style={styles.item}>
          <View style={{flexDirection:'row'}}>
            <Hyperlink linkStyle={{color:'#2980b9'}} onPress={(url) => Linking.openURL(url)}>
              <Text style={styles.itemtext}>
                  Marvel: http://developer.marvel.com/
              </Text>
            </Hyperlink>
          </View>
        </F8Touchable>
        <F8Touchable style={{width: 64, height: 64}} onPress={this.onShare}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.itemtext}>Share</Text>
            <Image style={styles.share} source={require('../img/share.png')}/>
          </View>
        </F8Touchable>
        <View style={{flex:1}}/>
        <MarvelInfoView />
      </View>
    );
  }

}

AboutContentView.contextTypes = {
openDrawer: React.PropTypes.func,
};

var styles = StyleSheet.create({

  item: {
    height: 60,
    width: undefined,
  },

  description: {
    marginTop: 10,
    marginBottom: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },

  itemtext: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20
  },

  toolbar: {
    height: 56,
    backgroundColor: 'rgb(168, 31, 26)',//red
    elevation: 2,
    borderRightWidth: 1,
    marginRight: -1,
    borderRightColor: 'transparent',
  },

  share: {
     width: 32,
     height: 32,
     alignSelf:'center',
     marginLeft: 10,
   }
});

module.exports = AboutContentView;
