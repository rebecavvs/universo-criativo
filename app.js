import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Switch, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nomeDrink, setNomeDrink] = useState('');
  const [ingrediente1, setIngrediente1] = useState('');
  const [ingrediente2, setIngrediente2] = useState('');
  const [observacao, setObservacao] = useState('');
  const [tipo, setTipo] = useState('alcoólico');
  const [gelo, setGelo] = useState('muito');
  const [grauAlcoolico, setGrauAlcoolico] = useState(0);
  const [doçura, setDoçura] = useState(0);
  const [decorado, setDecorado] = useState(false);
  const [taComSombrinha, setTaComSombrinha] = useState(false);
  const [mensagem, setMensagem] = useState('');

  function criarDrink() {
    setMensagem(`🍹 Drink "${nomeDrink}" criado com sucesso!`);
  }

  function limparTudo() {
    setNomeDrink('');
    setIngrediente1('');
    setIngrediente2('');
    setObservacao('');
    setMensagem('');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🍸 Complexo dos Drinks</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Drink"
        value={nomeDrink}
        onChangeText={setNomeDrink}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrediente 1"
        value={ingrediente1}
        onChangeText={setIngrediente1}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrediente 2"
        value={ingrediente2}
        onChangeText={setIngrediente2}
      />
      <TextInput
        style={styles.input}
        placeholder="Observações"
        value={observacao}
        onChangeText={setObservacao}
      />

      <Text style={styles.label}>Tipo:</Text>
      <Picker
        style={styles.picker}
        selectedValue={tipo}
        onValueChange={(itemValue) => setTipo(itemValue)}>
        <Picker.Item label="Alcoólico" value="alcoólico" />
        <Picker.Item label="Sem Álcool" value="semalcool" />
      </Picker>

      <Text style={styles.label}>Quantidade de Gelo:</Text>
      <Picker
        style={styles.picker}
        selectedValue={gelo}
        onValueChange={(itemValue) => setGelo(itemValue)}>
        <Picker.Item label="Pouco" value="pouco" />
        <Picker.Item label="Médio" value="médio" />
        <Picker.Item label="Muito" value="muito" />
      </Picker>

      <Text style={styles.label}>Grau Alcoólico: {grauAlcoolico.toFixed(1)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={grauAlcoolico}
        onValueChange={setGrauAlcoolico}
      />

      <Text style={styles.label}>Doçura: {doçura.toFixed(1)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={doçura}
        onValueChange={setDoçura}
      />

      <View style={styles.switchContainer}>
        <Text>Com decoração?</Text>
        <Switch value={decorado} onValueChange={setDecorado} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Tem sombrinha?</Text>
        <Switch value={taComSombrinha} onValueChange={setTaComSombrinha} />
      </View>

      <View style={styles.botaoContainer}>
        <Button title="Criar Drink" onPress={criarDrink} />
        <Button title="Limpar Campos" color="red" onPress={limparTudo} />
      </View>

      {mensagem !== '' && <Text style={styles.mensagem}>{mensagem}</Text>}

      <View style={styles.imagemContainer}>
        <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2017/05/31/12/20/drink-2358759_1280.jpg' }} />
        <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/drink-828584_1280.jpg' }} />
        <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2016/06/15/15/48/mojito-1453604_1280.jpg' }} />
        <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2020/03/09/15/00/cocktail-4913715_1280.jpg' }} />
        <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2021/09/03/18/11/cocktail-6596004_1280.jpg' }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF0F5',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#8B008B',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8B008B',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#8B008B',
  },
  picker: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  botaoContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  mensagem: {
    backgroundColor: '#D8BFD8',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: '#4B0082',
    fontWeight: 'bold',
  },
  imagemContainer: {
    marginTop: 20,
    gap: 10,
  },
  image: {
    height: 180,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
});