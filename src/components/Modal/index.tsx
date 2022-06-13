import React, { useRef } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

//import { Container, Button, ButtonText } from './styles';

const Modal: React.FC = () => {
 // const bottomSheetRef = useRef<BottomSheet>(null);

 // const handleOpenBottomSheet = () => {
  //  bottomSheetRef.current?.expand();
  //}

  return (
    <BottomSheet
      //ref={bottomSheetRef}
      snapPoints={[20, 400]}
      backgroundStyle={styles.bottomShert}
    >
      <Text>Bem Vindo!</Text>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomShert: {
    backgroundColor: '#1F1B24',
  }
})

export default gestureHandlerRootHOC(Modal);