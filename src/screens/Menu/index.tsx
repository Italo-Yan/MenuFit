import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { styles } from "./styles";

type MenuScreenNavigationProp = NavigationProp<RootStackParamList, "Menu">;

export function Menu() {
  const navigation = useNavigation<MenuScreenNavigationProp>();

  const [refeicoes, setRefeicoes] = useState(3);
  const [exercicios, setExercicios] = useState(1);

  const meals = [
    { time: "7:00 - 8:00", name: "CAFÉ DA MANHÃ" },
    { time: "10:00 - 11:00", name: "LANCHE DA MANHÃ" },
    { time: "13:00 - 14:00", name: "ALMOÇO" },
    { time: "16:00 - 17:00", name: "LANCHE DA TARDE" },
    { time: "19:00 - 20:00", name: "JANTAR" },
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>MF</Text>
        <FontAwesome name="balance-scale" size={32} color="white" />
      </View>

      {/* Seção de Contadores */}
      <View style={styles.counterSection}>
        {/* Contador de Refeições */}
        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>REFEIÇÕES</Text>
          <View style={styles.counter}>
            <TouchableOpacity
              onPress={() => setRefeicoes(refeicoes > 0 ? refeicoes - 1 : 0)}
              disabled={refeicoes === 0}
            >
              <Text
                style={[
                  styles.counterButton,
                  refeicoes === 0 && styles.disabledButton,
                ]}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{refeicoes}</Text>
            <TouchableOpacity onPress={() => setRefeicoes(refeicoes + 1)}>
              <Text style={styles.counterButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.dayNumber}>25</Text>

        {/* Contador de Exercícios */}
        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>EXERCÍCIOS</Text>
          <View style={styles.counter}>
            <TouchableOpacity
              onPress={() =>
                setExercicios(exercicios > 0 ? exercicios - 1 : 0)
              }
              disabled={exercicios === 0}
            >
              <Text
                style={[
                  styles.counterButton,
                  exercicios === 0 && styles.disabledButton,
                ]}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{exercicios}</Text>
            <TouchableOpacity onPress={() => setExercicios(exercicios + 1)}>
              <Text style={styles.counterButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Lista de Refeições */}
      <View style={styles.mealList}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.mealItem}>
            <Text style={styles.mealTime}>{meal.time}</Text>
            <Text style={styles.mealName}>{meal.name}</Text>
            {/* Botão que navega para a tela Description */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Description", {
                  mealTime: meal.time,
                  mealName: meal.name,
                })
              }
            >
              <FontAwesome name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Rodapé */}
      <Text style={styles.footerText}>
        Seu corpo reflete o cuidado que você dá a ele.
      </Text>
    </View>
  );
}
