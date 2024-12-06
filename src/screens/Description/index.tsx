import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Importa useRoute
import { styles } from './styles';

type RouteParams = {
  mealTime: string;
  mealName: string;
};

export function Description() {
  const route = useRoute();
  const { mealTime, mealName } = route.params as RouteParams;
  const [food, setFood] = useState('');
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    console.log('Salvando:', { food, weight, notes });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>MF</Text>
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.title}>{mealName}</Text>
        <Text style={styles.subtitle}>{mealTime}</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>O QUE EU COMI:</Text>
        <TextInput
          style={styles.input}
          placeholder="EX: BANANA, PÃO, DANONE"
          placeholderTextColor="#bbb"
          value={food}
          onChangeText={setFood}
        />

        <Text style={styles.label}>PESO:</Text>
        <TextInput
          style={styles.input}
          placeholder="PESO DA REFEIÇÃO EM KG"
          placeholderTextColor="#bbb"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />

        <Text style={styles.label}>OBS:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="OBSERVAÇÕES"
          placeholderTextColor="#bbb"
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
}
