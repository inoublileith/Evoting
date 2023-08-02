import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Alert } from 'react-native'
import AuthService from './services/auth.service'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import { AuthContext } from './context'
import {
  SignIn,
  CreateAccount,
  Search,
  Verifieroriginalite,
  Search2,
  Profile,
  Splash,
  OnBoard,
  Explore,
  RecScreen,
  VoteScreen,
  RechercheScreen,
  DetailsScreen,
  DetailsScreenn
} from './Screens'
import Icon from 'react-native-ionicons';

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name='OnBoard'
      component={OnBoard}
      options={{ title: 'OnBoard', headerShown: false }}
    />
    <AuthStack.Screen
      name='SignIn'
      component={SignIn}
      options={{ title: 'Sign In', headerShown: false }}
    />
    <AuthStack.Screen
      name='CreateAccount'
      component={CreateAccount}
      options={{ title: 'Créer un compte', presentation: 'modal' }}
    />
  </AuthStack.Navigator>
)

const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const ExploreStack = createStackNavigator()
const RecsStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='VerifierOriginalite'
      component={Verifieroriginalite}
      options={{
        headerShown: false,
        
      }}
    />
    {/* <HomeStack.Screen
      name='Details'
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
        headerShown: false,
      })}
    /> */}
  </HomeStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name='Search1'
      component={VoteScreen}
      options={{
        headerShown: false,
      }}
    />
    <SearchStack.Screen
      name='Search2'
      component={Search2}
      options={{
        headerShown: false,
      }}
    />
  </SearchStack.Navigator>
)
const ExploreStackScreen = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen
      name='forExplore'
      component={RechercheScreen}
      options={{
        headerShown: false,
      }}
    />
    <ExploreStack.Screen
      name='DetailsScreen'
      component={DetailsScreen}
      options={{
        headerShown: false,
      }}
    />
    <ExploreStack.Screen
      name='DetailsScreenn'
      component={DetailsScreenn}
      options={{
        headerShown: false,
      }}
    />
  </ExploreStack.Navigator>
)
const RecsStackScreen = () => (
  <RecsStack.Navigator>
    <RecsStack.Screen
      name='forRecs'
      component={RecScreen}
      options={{
        headerShown: false,
      }}
    />
  </RecsStack.Navigator>
)
const ProfileStack = createStackNavigator()
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='myProfile'
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Session') {
          return (
            <Ionicons
              name={focused ? 'newspaper' : 'newspaper-outline'}
              size={size}
              color={color}
            />
          )
        } else if (route.name === 'Voter') {
          return (
            <Ionicons
              name={focused ? 'checkbox' : 'checkbox-outline'}
              size={size}
              color={color}
            />
          )
        } 


      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: '#07a7e5',
    })}
  >
    <Tabs.Screen
      name='Session'
      component={HomeStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name='Voter'
      component={ExploreStackScreen}
      options={{
        headerShown: false,
      }}
    />
   
  </Tabs.Navigator>
)
function CustomDrawerContent(props) {
  const { signOut } = React.useContext(AuthContext)
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Settings' onPress={() => alert('Make a view')} />
      <DrawerItem label='SignOut' onPress={() => signOut()} />
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator()
const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName='Acceuil'
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name='Acceuil' component={TabsScreen} />
    <Drawer.Screen name='Profile' component={ProfileStackScreen} />
  </Drawer.Navigator>
)

const RootStack = createStackNavigator()
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator>
    {userToken ? (
      <RootStack.Screen
        name='App'
        component={DrawerScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name='Auth'
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    )}
  </RootStack.Navigator>
)

export default () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: (username, password) => {
        setIsLoading(false)

        AuthService.Login(username, password)
          .then((data) => {
            console.log(data.accessToken)
            setUserToken(data.accessToken)
          })
          .catch(() => {
            
            setIsLoading(false)
            setUserToken(null)
            Alert.alert('ERROR', 'Incorrect entry!!', [{ text: 'OK' }])
          })
      },
      signUp: (username, email, password) => {
        AuthService.Register(username, email, password)
          .then(() => {
            console.log('inscrit')
            setIsLoading(false)
            setUserToken('asdf')
          })
          .catch(() => {
            setIsLoading(false)
            setUserToken(null)
            Alert.alert('ERROR', 'error!!', [{ text: 'OK' }])
          })
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      },
    }
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Splash />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
