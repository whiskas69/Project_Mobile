import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Me from './page/me';
import ChangePassword from './page/changePassword';
import Categories from './page/categories';
import EditMe from './page/editMe';
import ReviewHistory from './page/reviewHis'
import EditReview from './page/editReview';

export default function App() {
  return (
    // <Me/>
    // <ChangePassword/>
    // <Categories/>
    // <EditMe/>
    // <ReviewHistory/>
    <EditReview/>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
