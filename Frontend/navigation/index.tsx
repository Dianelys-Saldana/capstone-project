/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

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
import Booking from '../screens/BookingScreen';
import Success from '../screens/Success';
import Reviews from '../screens/ReviewsScreen';
import Chat from '../screens/ChatScreen';
 
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
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="Modal" component={ModalScreen} />
       </Stack.Group>
       <Stack.Screen name="Specialty" component={Specialty} options={{ headerShown: false }} />
       <Stack.Screen name="Specialist" component={Specialist} options={{ headerShown: false }} />
       <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
       <Stack.Screen name="Reviews" component={Reviews} options={{ headerShown: false }} />

       <Stack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }} />
       <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />

       {/* <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} /> */}
       {/* <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
       <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
       <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
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
       initialRouteName="Dashboard"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
         tabBarIconStyle: { display: "none" },
         tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
       }}>
     
       <BottomTab.Screen
         name="Dashboard"
         component={Dashboard}
         options={({ navigation }: RootTabScreenProps<'Dashboard'>) => ({
           title: 'Dash',
           headerShown: false,
           
           // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Modal')}
               style={({ pressed }) => ({
                 opacity: pressed ? 0.5 : 1,
               })}>
               {/* <FontAwesome
                 name="info-circle"
                 size={25}
                 color={Colors[colorScheme].text}
                 style={{ marginRight: 15 }}
               /> */}
             </Pressable>
           ),
         })}
       />
       <BottomTab.Screen
         name="Chat"
         component={Chat}
         options={{
           title: 'Chat',
           headerShown: false,
           // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         }}
       />
       <BottomTab.Screen
         name="Booking"
         component={Booking}
         options={{
           title: 'Booking',
           headerShown: false,
           // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         }}
       />
       <BottomTab.Screen
         name="Profile"
         component={Profile}
         options={{
           title: 'Profile',
           headerShown: false,
           // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         }}
       />
     </BottomTab.Navigator>
   );
 }


//  /**
//   * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
//   * https://reactnavigation.org/docs/bottom-tab-navigator
//   */
//   const BottomTabPrincipal = createBottomTabNavigator<RootTabParamList>();
 
//   function BottomTabNavigatorPrincipal() {
//     const colorScheme = useColorScheme();
//       return(
//         <BottomTab.Navigator
//           initialRouteName="Dashboard"
//           screenOptions={{
//           tabBarActiveTintColor: Colors[colorScheme].tint,
//           tabBarIconStyle: { display: "none" },
//           tabBarLabelStyle: {
//           fontSize: 20,
//           fontWeight: 'bold',
//           },
//         }}>
//           <BottomTab.Screen
//             name="Profile"
//             component={Profile}
//             options={({ navigation }: RootTabScreenProps<'Profile'>) => ({
//             title: 'Profile',
//             headerShown: false,
            
//             // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//             headerRight: () => (
//               <Pressable
//                 onPress={() => navigation.navigate('Modal')}
//                 style={({ pressed }) => ({
//                   opacity: pressed ? 0.5 : 1,
//                 })}>
//               </Pressable>
//             ),
//             })}
//           />

//         </BottomTab.Navigator>
//       );
//   }


 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
//  function TabBarIcon(props: {
//    name: React.ComponentProps<typeof FontAwesome>['name'];
//    color: string;
//  }) {
//    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
//  }
 