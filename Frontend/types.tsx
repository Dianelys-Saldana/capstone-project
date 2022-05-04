/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
 import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList {}
   }
 }
 
 export type RootStackParamList = {
   Root: NavigatorScreenParams<RootTabParamList> | undefined;
   Modal: undefined;
   NotFound: undefined;
   Specialty: undefined;
   Specialist: undefined;
   Success: undefined;
   Reviews: undefined;

  //  SignIn: undefined;
   SignUp: undefined;

  //  Chat: undefined;
  //  Profile: undefined;
  //  Dashboard: undefined;
  //  Booking: undefined;
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 
 export type RootTabParamList = {
   SignIn: undefined;
  //  SignUp: undefined;

   Chat: undefined;
   Profile: undefined;
   Dashboard: undefined;
   Booking: undefined;
 };
 
 export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
   BottomTabScreenProps<RootTabParamList, Screen>,
   NativeStackScreenProps<RootStackParamList>
 >;
 
 