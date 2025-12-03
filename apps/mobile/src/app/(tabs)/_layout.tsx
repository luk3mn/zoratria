import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function TabLayout() {
    const { height } = Dimensions.get('window');
    return (
        <Tabs screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,  
        }}>
            <Tabs.Screen
                name="learning"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" size={size} color={color} />
                    ),
                    tabBarIconStyle: { marginTop: height * 0.008 },
                }}
            />
            <Tabs.Screen
                name="health"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" size={size} color={color} />
                    ),
                    tabBarIconStyle: { marginTop: height * 0.008 },
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    tabBarIconStyle: { marginTop: height * 0.008 },
                }}
            />
            <Tabs.Screen
                name="finance"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="wallet" size={size} color={color} />
                    ),
                    tabBarIconStyle: { marginTop: height * 0.008 },
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                    tabBarIconStyle: { marginTop: height * 0.008 },
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
}