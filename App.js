import React,{Component} from 'react';
import { StyleSheet, Text, View,
  TouchableOpacity,
  AppRegistry
 } from 'react-native';
 //var XRegExp = require('xregexp');
 //var qs = require('qs');
 //var assert=require('assert');
 var data1;

export default class App extends React.Component {
  render() {
/*     var evens =[];
    XRegExp.forEach('1a2345', /\d/, function (match, i) {
      if (i % 2) evens.push(+match[0]);
    }); 
    alert(evens); */
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.ssss}>
          <Text> 访问</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.aaaa}>
          <Text> 第二步</Text>
        </TouchableOpacity>
      </View>
    );
  }

  ssss(){

    fetch('https://cherydealerservicebetf1d1d8c7d.cn1.hana.ondemand.com/sciuserdetail',{
      method: 'GET',
      headers:{
        credentials:'include',
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(resp=>{
      return resp.text();
      //resp.formData;
    })
    .then((respData)=> {
      data1=respData;
      //data2=respData;
      console.log(respData);
     // alert(data1);
     return 1;
    })
    .catch((error)=>{
      alert('error');
    })
  }

  aaaa(){
    
    var data2=data1;
//  var relaystate_pattern=/(?<=RelayState" value=")+[a-z]*/,
//  str = '';
//  var samlrequest_pattern= /[\w=+]+(?="/><input type="hidden" name="Rela)/,
//  str = ''; */
//    var relaystate_pattern= new RegExp('[a-z]+(?="/><noscript)','g');

    var relaystate_pattern= new RegExp('[a-z]+(?="/><noscript)','g');
    var samlrequest_pattern= new RegExp('[a-zA-Z0-9=+]+(?="/)','g');
    var bottle1=relaystate_pattern.exec(data1);
    var result1=bottle1[0];
    var bottle2=samlrequest_pattern.exec(data2);
    var result2=bottle2[0];

    console.log(result2);
    console.log(result1);
/*     var formData = new FormData();
    formData.append('SAMLRequest',result2);
    formData.append('RelayState',result1);
    formData.append('j_username','test002@sap.com');
    formData.append('j_password','Abc123456');
 */

    var details ={
      SAMLRequest:result2,
      RelayState:result1,
      j_password:'Abc123456',
      j_username:'test002@sap.com',
    };

    var formBody=[];
    for (var property in details){
      var encodeKey = encodeURIComponent(property);
      var encodeValue = encodeURIComponent(details[property]);
      formBody.push(encodeKey + '=' + encodeValue);
    }
    formBody = formBody.join('&');

    fetch('https://cscapj.accounts.ondemand.com/saml2/idp/sso/cscapj.accounts.ondemand.com',{
      credentials:'include',
      method: 'POST',
      headers:{
      //  'Origin':'https://cscapj.accounts.ondemand.com',
        'Upgrade-Insecure-Requests':'1',
       // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      //  'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        //'Referer':'https://cscapj.accounts.ondemand.com/saml2/idp/sso/cscapj.accounts.ondemand.com',
      //  'Accept-Encoding':'gzip, deflate, br',
        'Accept-Language':'zh-CN,zh;q=0.9'
      },
      body:formBody,
    })
      .then(resp=>{
        alert(resp.status);
        return resp.text();
      })
      .then((respData)=> {
        data1=respData;
        console.log(respData);
       return 1;
      })
      .catch((error)=>{
        alert('error2');
      })
  } 

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('Project',()=>Project);