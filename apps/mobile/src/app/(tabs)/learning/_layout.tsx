import { Stack } from 'expo-router';

export default function LearningLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Learning', headerShown: false }} 
      />
    </Stack>
  );
}