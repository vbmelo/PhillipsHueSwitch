import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';

export default function LampControls () {

  const [lampadaState, setlampadaState] = useState(false)

  const lampadaOn = async () => {
    if (lampadaState === false) {
      //ligar a lampada
      
      setlampadaState(true);
      console.log("Lâmpada LIGADA")
      let response = await fetch("https://hue-iot-api.vercel.app/api/ligth/vbmelo@ua.pt/669966/on")
    } 
    else {
      console.log("A lâmpada já está LIGADA!")
    }

  }

  const lampadaOff = async () => {
    if (lampadaState === true) {
      //desligar a lampada
      setlampadaState(false);
      console.log("Lâmpada DESLIGADA")
      let response = await fetch("https://hue-iot-api.vercel.app/api/ligth/vbmelo@ua.pt/669966/off")
    } 
    else {
      // Informar que a lampada já está desligada!
      console.log("Antes a Lâmpada precisa estar LIGADA para ser DESLIGADA!")
    }
  }

  const styles = StyleSheet.create({
    controlCenterCard: {
      backgroundColor: '#323238',
      padding: 8,
    },

    title: {
      margin: 8,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#00b37E',
    },
  
  });

  return (
    <Card style={styles.controlCenterCard}>
      <Text style={styles.title}>
        Lamp Control Center
      </Text>
      <Button
        onPress={lampadaOn}
        title="ON"
        color="#00875f"
        accessibilityLabel="Botão para ligar a lâmpada"
      />
      <Button
        onPress={lampadaOff}
        title="OFF"
        color="#f75a68"
        accessibilityLabel="Botão para desligar a lâmpada"
      />
    </Card>
  )
}