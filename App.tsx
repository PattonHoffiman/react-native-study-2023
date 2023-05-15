import { StatusBar } from 'react-native';

import Home from './src/screens/Home';

// ? Main Component
export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor="transparent"
      />
      <Home />
    </>
  );
};
