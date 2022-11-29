import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Animated } from 'react-native';
import Constrants from 'expo-constants';
import DisplayResults from './DisplayResults';
import Actions from './Actions';
import Header from './Header';

export default function RockPaperSc(){
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [result, setResult] = useState("");
    const [canPlay, setPlay] = useState(true);

    //The Animation part
    const fadeAnimation = useRef(new Animated.Value(1)).current;

function play(choice){
      //As most ppl know, Roack Papper scissors have 3 choices
      // 1. Rock
      // 2. Papper
      // 3. Scissor
    const randomComputerChoice = Math.floor(Math.random() *3 ) + 1;
    let resultString = "";

    if(choice ===1){
        resultString = randomComputerChoice === 3 ?  "WIN" : "LOSE";
    }
    else if ( choice === 2){
      resultString = randomComputerChoice === 2 ? "WIN" : "LOSE";
    }
    if (choice === randomComputerChoice){
      resultString = "DRAW";
    }
    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    //using timeout to wait for the animation and hide old result
    setTimeout(() => {
      setResult(resultString);

    }, 300);

    //Animated hide old result and show new result
    Animated.sequence([
      Animated.timing(fadeAnimation,{
        toValue: 0,
        duration:300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue:1,
        duration:300,
        useNativeDriver:true,
      }),
    ]).start();

    //Disable action when animation running
    setPlay(false);
    setTimeout(() => {
      setPlay(true);
    }, 600);
  }
  //returning the view
  return(
    <SafeAreaView style={styles.container}>
    <Header />
      <View style ={styles.content}>
        <View style={styles.result}>
          <Animated.Text
            style={[styles.resultText, {opacity: fadeAnimation}]}
          >
          {result}
            </Animated.Text>
          </View>
          <View style ={styles.screen}>
          {!result ? (
            <Text style={styles.readyText}>Let's Play!</Text>
          ) : (
            <DisplayResults
                userChoice= {userChoice}
                computerChoice={computerChoice}
              />
          )}
        </View>
        <Actions  play={play} canPlay={canPlay} />
        </View>
      </SafeAreaView>  
  );
}

      const styles = StyleSheet.create({
          container : {
            flex: 1,
            paddingTop: Constrants ,
            },
          content : {
            flex: 1,
            marginBottom: 5,
            backgroundColor: '#224021'
            },
          result : {
            height: 100,
            justifyContent: 'flex-end',
            alignItems: 'center',
            },
          resultText :{
            frontSize:48,
            frontWeight: 'bold',
            },
          screen : {
            flex: 1,
            flexDirection: 'row',
            },
          readyText : {
            marginTop: -48,
            alignSelf: 'center',
            textAlign: 'center',
            width: '100%',
            fontSize: 48,
            fontWeight: 'bold',
          }
});


