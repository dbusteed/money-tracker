import React, {Component} from 'react'
import {View,Text,TextInput,Button,Picker,KeyboardAvoidingView} from 'react-native'
import gStyles from '../../config/gStyles'
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'
import TitleBar from '../../components/titleBar'
import * as dataActions from '../../actions/dataActions'
import TabNavigator from 'react-native-tab-navigator'
import { makeSummary } from '../../actions/summaryActions'

class NewExpense extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      amt: 0,
      type: 'gas',
      desc: '',
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
      'type': this.state.type,
      'desc': this.state.desc
    }

    this.props.newExpense(newData)

    this.setState({
      date: '',
      amt: 0,
      type: 'gas',
      desc: '',
    })

    this.amtInput.clear()
    this.descInput.clear()
    this.props.makeSummary()
  }

  renderTitleBar() {
    return new TitleBar.builder()
      .withOneIcon('arrow-back', ()=>{this.props.navigation.navigate('Home')})
      .withTitle('Add Expense Data').build() 
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
              titleStyle={gStyles.tabLabel}
              tabStyle={{alignItems: 'center', justifyContent: 'center'}} />
            <TabNavigator.Item
              title='NEW EXPENSE'
              onPress={()=>this.props.navigation.navigate('NewExpense')}
              titleStyle={gStyles.selectedTabLabel}
              tabStyle={{alignItems: 'center', justifyContent: 'center'}} />
          </TabNavigator>
        </View>

        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={500} style={gStyles.formContainer}>
          
          <Text style={gStyles.formLabel}>Date: </Text>
          <DatePicker
            style={{width: '80%', marginBottom: 20}}
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
            keyboardType={'numeric'}
            style={{height: 50, width: '80%', fontSize: 24, textAlign: 'center', marginBottom: 20}}
            onChangeText={(t) => this.setState({...this.state, amt: t})}
          />

          <Text style={gStyles.formLabel}>Type: </Text>                    
          <Picker
            selectedValue={this.state.type}
            style={{ height: 50, width: '50%'}}
            alignItems={'center'}
            itemStyle={{fontSize: 24, textAlign: 'center'}}
            onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
            <Picker.Item label="Gas" value="gas" />
            <Picker.Item label="Groceries" value="groc" />
            <Picker.Item label="Eating Out" value="eatOut" />
            <Picker.Item label="House" value="house" />
            <Picker.Item label="Tithing" value="tithing" />
            <Picker.Item label="School" value="school" />
            <Picker.Item label="Other" value="other" />
          </Picker>

          <Text style={gStyles.formLabel}>Description: </Text>          
          <TextInput
            ref={input => {this.descInput = input}}
            style={{height: 50, width: '80%', fontSize: 24, textAlign: 'center', marginBottom: 20}}
            onChangeText={(t) => this.setState({...this.state, desc: t})}
          />

          <Button title={'Submit'} onPress={this.handleSubmit.bind(this)} />

        </KeyboardAvoidingView>

      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    newExpense: (obj) => dispatch(dataActions.newExpense(obj)),
    makeSummary: () => dispatch(makeSummary())
  })
}

export default connect(null, mapDispatchToProps)(NewExpense)