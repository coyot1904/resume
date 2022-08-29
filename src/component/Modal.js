import React, { useState } from "react";
import { Modal , Pressable , StyleSheet , View , Image} from 'react-native';
import Metrics from './Metrics';

import { images } from '../utils/Images';

const PModal = props => {
    const {
        visible,
        event,
        animationType,
        children,
    } = props;
    
    return (
        <Modal
            animationType={animationType}
            transparent={true}
            visible={visible}
            style={{width : '90%'}}
            onRequestClose={() => {
                visible();
            }}
        >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <Pressable
                  style={styles.buttonClose}
                  onPress={() => event()}
                  >
                      <Image source={images.icons.close} style={styles.closeImage}/>
                  </Pressable>
                  {children}
              </View>
            </View>
        </Modal>
    );
};

export default PModal;



const styles =  StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
      modalView: {
        margin: Metrics.measure(20),
        backgroundColor: "white",
        width : '85%',
        borderRadius: 10,
        padding: Metrics.measure(35),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      closeImage : {
        resizeMode: "contain",
        width: Metrics.measure(25),
        height: Metrics.measure(25),
      },
      buttonClose : {
        position : 'absolute',
        right : Metrics.measure(-10),
        top : Metrics.measure(-10),
      },
});