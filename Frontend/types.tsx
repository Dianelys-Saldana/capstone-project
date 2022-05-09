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

   SignIn: undefined;
   SignUp: undefined;
   OnboardingOne: undefined;
   OnboardingTwo: undefined;
   OnboardingThree: undefined;

   Specialty: undefined;
   Specialist: undefined;
   Reviews: undefined;
   Success: undefined;
   Dashboard: undefined;
   Chat: undefined;
   Booking: undefined;
   Patient: undefined;
   Professional: undefined;
   Personal: undefined;
   About: undefined;
   PrivacyPolicy: undefined;
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 
 export type RootTabParamList = {
   ChatTab: undefined;
   ProfileTab: undefined;
   DashboardTab: undefined;
   CalendarTab: undefined;
 };
 
 export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
   BottomTabScreenProps<RootTabParamList, Screen>,
   NativeStackScreenProps<RootStackParamList>
 >;
 
 