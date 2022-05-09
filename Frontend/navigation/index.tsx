/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image, StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/ProfileScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Specialty from '../screens/SpecialtyScreen';
import Specialist from '../screens/SpecialistScreen';
import Calendar from '../screens/CalendarScreen';
import Success from '../screens/Success';
import Reviews from '../screens/ReviewsScreen';
import Chat from '../screens/ChatScreen';
import ChatTab from '../screens/ChatGeneralScreen';
import Booking from '../screens/BookingScreen';
import Patient from '../screens/PatientInfoScreen';
import Professional from '../screens/ProfessionalInfoScreen';
import OnboardingOne from '../screens/OnboardingOne';
import OnboardingTwo from '../screens/OnboardingTwo';
import OnboardingThree from '../screens/OnboardingThree';
import AboutScreen from '../screens/AboutScreen';
import PersonalScreen from '../screens/PersonalScreen';
import PrivacyPolicy from '../screens/PrivacyPolicyScreen';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Root" component={RegisterStackScreen} options={{ headerShown: false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="Modal" component={ModalScreen} />
       </Stack.Group>
       <Stack.Screen name="Dashboard" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="Specialty" component={Specialty} options={{ headerShown: false }} />
       <Stack.Screen name="Specialist" component={Specialist} options={{ headerShown: false }} />
       <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
       <Stack.Screen name="Reviews" component={Reviews} options={{ headerShown: false }} />
       <Stack.Screen name="Professional" component={Professional} options={{ headerShown: false }} />
       <Stack.Screen name="Patient" component={Patient} 
        options={{ 
          headerShown: true, 
          title: 'Edit Personal Information', 
          headerBackTitleVisible: false
        }} />
       <Stack.Screen name="Booking" component={Booking} 
        options={{ 
          headerShown: true, 
          title: 'Book Appointment', 
          headerBackTitleVisible: false
        }} />
       <Stack.Screen name="Chat" component={Chat} 
        options={{ 
          headerShown: true,
          headerStyle: {
          backgroundColor: '#323337',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="Personal" component={PersonalScreen} 
        options={{ 
          headerShown: true, 
          title: 'Personal Information', 
          headerBackTitleVisible: false
        }} />
      <Stack.Screen name="About" component={AboutScreen}
        options={{ 
          headerShown: true, 
          title: 'About MediFast', 
          headerBackTitleVisible: false,
        }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}
        options={{ 
          headerShown: true, 
          title: 'Privacy Policy', 
          headerBackTitleVisible: false,
        }} />
      {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();

 function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (

     <BottomTab.Navigator
       initialRouteName="DashboardTab"
       screenOptions={{
         tabBarActiveTintColor: '#0074B7',
       }}>

       <BottomTab.Screen
         name="DashboardTab"
         component={Dashboard}
         options={({ navigation }: RootTabScreenProps<'DashboardTab'>) => ({
           title: 'Dashboard',
           tabBarShowLabel: false,
           headerShown: false,
           tabBarIcon: ({ color }) => <Ionicons name="ios-home-outline" size={24} color={color} />,
           
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Modal')}
               style={({ pressed }) => ({
                 opacity: pressed ? 0.5 : 1,
               })}>
             </Pressable>
           ),
         })}
       />
       <BottomTab.Screen
         name="ChatTab"
         component={ChatTab}
         options={{
           title: 'Messages',
           tabBarShowLabel: false,
           headerShown: true,
           tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />,
          }}
       />
       <BottomTab.Screen
         name="CalendarTab"
         component={Calendar}
         options={{
           title: 'My Appointments',
           tabBarShowLabel: false,
           headerShown: true,
           tabBarIcon: ({ color }) => <Feather name="calendar" size={24} color={color} />,
         }}
       />
       <BottomTab.Screen
         name="ProfileTab"
         component={Profile}
         options={{
           title: 'Profile',
           tabBarShowLabel: false,
           headerShown: true,  
           tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
         }}
       />
     </BottomTab.Navigator>
   );
 }

const RegisterStack = createNativeStackNavigator();

function RegisterStackScreen() {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen name="OnboardingOne" component={OnboardingOne} options={{ headerShown: false }} />
      <RegisterStack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
      <RegisterStack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
      <RegisterStack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }}/>
      <RegisterStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
    </RegisterStack.Navigator>
  );
}

 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 function TabBarIcon(props: {
   name: React.ComponentProps<typeof FontAwesome>['name'];
   color: string;
 }) {
   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
 }
 