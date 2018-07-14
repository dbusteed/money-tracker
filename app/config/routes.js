import React from 'react'
import { createStackNavigator, 
	createMaterialTopTabNavigator, } from 'react-navigation'

import Home from '../pages/home'
import NewIncome from '../pages/newIncome'
import NewExpense from '../pages/newExpense'
import Details from '../pages/details'

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
			Details: { screen: Details },
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
