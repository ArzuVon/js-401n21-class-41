import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const Actions = ({ play, canPlay}) => {
  return (
    <View style={styles.actions}>


      //ROCK
      <TouchableOpacity
          disabled={!canPlay}
          style={styles.actionButton}
          onPress={() => play(1)}
          >
      <FontAwesome5 name={'hand-rock'} size={40} color='#142615'  />
      </TouchableOpacity>


        //PAPER
      <TouchableOpacity
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(2)}
      >
      <FontAwesome5 name={'hand-paper'} size={40} color='#142615'  />
      </TouchableOpacity>


      //SCISSOR
     <TouchableOpacity
      disabled={!canPlay}
      style={styles.actionButton}
      onPress={() => play(3)}
     >

     <FontAwesome5 name={'hand-scissor'} size={40} color='#142615' style={{ transform: [{rotate: '67deg'}]}} />
     </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton:{
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B9BFA4',
    borderRadius: 32,
  }

});

export default Actions 