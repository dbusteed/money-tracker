import React, {Component} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import gStyles from '../../config/gStyles'
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'
import TitleBar from '../../components/titleBar'
import * as dataActions from '../../actions/dataActions'
import TabNavigator from 'react-native-tab-navigator'
import { makeSummary } from '../../actions/summaryActions'

class NewIncome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      amt: 0,
      desc: ''
    }
  }

  handleSubmit = () => {
    
    //date
    date = this.state.date

    if((date) == '') {
      alert('Please enter a date')
      return 0
    }
    
    //amount
    if((Number(this.state.amt) != this.state.amt) || this.state.amt == 0) {
      alert('Please enter a valid amount')
      return 0
    } else {
      amt = Number(this.state.amt)
    }

    //desc
    if(this.state.desc == '') {
      alert('Please enter a description')
      return 0
    }

    newData = {
      'date': date,
      'amt': amt,
      'desc': this.state.desc
    }
    
    this.props.newIncome(newData)

    this.setState({
      date: '',
      amt: 0,
      desc: ''
    })

    this.amtInput.clear()
    this.descInput.clear()
    this.props.makeSummary()
  }

  renderTitleBar() {
    return new TitleBar.builder()
      .withOneIcon('arrow-back', ()=>{this.props.navigation.navigate('Home')})
      .withTitle('Add Income Data').build() 
  }
  
  render() {

    return (
      <View style={gStyles.container}>
        {this.renderTitleBar()}

        <View style={{flex: .1}}>
          <TabNavigator
            tabBarStyle={{
              backgroundColor: '#327ac7',
              position: 'absolute',
              top: -5,
              elevation: 5}}>
            <TabNavigator.Item
              title='NEW INCOME'
              onPress={()=>this.props.navigation.navigate('NewIncome')}
              titleStyle={gStyles.selectedTabLabel}
              tabStyle={{alignItems: 'center', justifyContent: 'center'}} />
            <TabNavigator.Item
              title='NEW EXPENSE'
              onPress={()=>this.props.navigation.navigate('NewExpense')}
              titleStyle={gStyles.tabLabel}
              tabStyle={{alignItems: 'center', justifyContent: 'center'}} />
          </TabNavigator>
        </View>

        <View style={gStyles.formContainer}>
          
          <Text style={gStyles.formLabel}>Date: </Text>
          <DatePicker
            style={{width: '80%', marginBottom: 20, borderColor: 'black', borderWidth: .75}}
            customStyles={{
              dateText: {
                fontSize: 24
              },
              dateIcon: {
                display: 'none'
              },
            }}
            date={this.state.date} mode="date"
            placeholder="select date" format="YYYY-MM-DD"
            confirmBtnText="Confirm" cancelBtnText="Cancel"
            onDateChange={(d) => {this.setState({...this.state, date: d})}}
          />

          <Text style={gStyles.formLabel}>Amount: </Text>
          <TextInput
            ref={input => {this.amtInput = input}}
            value={this.state.amt}
            keyboardType={'numeric'}
            style={gStyles.input}
            onChangeText={(t) => this.setState({...this.state, amt: t})}
          />

          <Text style={gStyles.formLabel}>Description: </Text>          
          <TextInput
            ref={input => {this.descInput = input}}
            value={this.state.desc}
            style={gStyles.input}
            onChangeText={(t) => this.setState({...this.state, desc: t})}
          />

          <Button title={'Submit'} onPress={this.handleSubmit.bind(this)} />

        </View>

      </View>
    )
  }
}

function mapStateToProps(state) {
  let addData

  (state.addData === undefined) ?
  addData = {} :
  addData = state.addData;

  console.log(addData)

  return ({
    addData
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    newIncome: (obj) => dispatch(dataActions.newIncome(obj)),
    makeSummary: () => dispatch(makeSummary())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewIncome)