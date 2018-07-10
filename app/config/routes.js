import React from 'react'
import { createStackNavigator, 
	createMaterialTopTabNavigator, } from 'react-navigation'

import Home from '../pages/home'
import NewIncome from '../pages/newIncome'
import NewExpense from '../pages/newExpense'

const NewDataTabs = createMaterialTopTabNavigator(
	{
		NewIncome: {
			screen: NewIncome
		},
		NewExpense: {
			screen: NewExpense
		}
	},
	{
		navigationOptions: {
			tabBarVisible: false
		}
	}
)

const MainNav = createStackNavigator(
	{
			Home: { screen: Home },
			NewIncome: { screen: NewDataTabs },
			NewExpense: { screen: NewExpense },
	},
	{
			headerMode: 'none',
			navigationOptions: {
					headerVisible: false,
			}
	}
)

export {
	MainNav
} 
