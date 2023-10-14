import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Me from './screen/me';
import ChangePassword from './screen/changePassword';
import Categories from './screen/categories';
import EditMe from './screen/editMe';
import ReviewHistory from './screen/reviewHis'
import EditReview from './screen/editReview';

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
