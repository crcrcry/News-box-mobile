import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

class NewsDetail extends Component {

  state = {
    text: [""]
  }

  componentDidMount(){

    fetch(this.props.newsInfo.textUrl).then((response) => {
      return response.text();
    }).then((data) => {
      let text = data.match(/(<p class="section txt">)\S+(<\/p>)/g);

      for(let i = 0; i < text.length; i++){
        text[i] = text[i].replace("<p class=\"section txt\">","");
        text[i] = text[i].replace("<\/p>","\n\n");
      }

      return text;
    }).then((data) => {
      this.setState({
        text: data
      });
    })

  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titleText}>{this.props.newsInfo.title}</Text>
        </View>
        <View style={styles.subheading}>
          <View style={styles.time}>
            <Text style={styles.timeText}>{this.props.newsInfo.time}</Text>
          </View>
          <View style={styles.author}>
            <Text style={styles.authorText}>{this.props.newsInfo.author}</Text>
          </View>
        </View>
        <View style={styles.image}>
          <Image
            source={{uri: this.props.newsInfo.imageUrl}}
            style={{width: 330, height: 200}}
          />
        </View>
        <View>
          <Text style={styles.text}>{this.state.text}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  titleText: {
    fontSize: 22,
    fontFamily: 'Heiti SC',
    fontWeight: 'bold',
  },
  subheading: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 15,
  },
  time:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  timeText: {
    color: "#777",
  },
  author: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  authorText: {
    color: "rgb(19,105,254)",
  },
  image: {
    marginTop: 20,
    marginBottom: 25,
  },
  text: {
    color: "#333",
    fontSize: 16,
    lineHeight: 24
  },

})

export default NewsDetail;