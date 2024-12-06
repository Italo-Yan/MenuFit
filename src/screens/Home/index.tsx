import React from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../../App";
import { styles } from "./styles"

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Text style={styles.logo}>MF</Text>
      </View>

      <View style={styles.middleSection}>
        <Text style={styles.slogan}>
          “PERFEITO PARA {'\n'}
          O DIA A DIA”
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}	