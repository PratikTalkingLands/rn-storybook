import { AppRegistry } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { view } from './storybook.requires';

// Get Storybook UI
const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

// Register Storybook as the main component
AppRegistry.registerComponent('main', () => StorybookUIRoot);

export default StorybookUIRoot;
