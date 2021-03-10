import React, {Component} from "react"
import {View} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"

class ReactPage extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      pageObject: pagesDisplayArr.filter(index => index.title===this.props.navigation.state.params.title)[0]
    }
  }
 
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerRight: navigation.state.params.docsButton
  });

  render()
  {
    return(
      <View>{this.state.pageObject.view}</View>
    )
  }
}

export default ReactPage