// import { Text, View } from 'react-native';
// export default function App() {
// return (
// <View>
// <Text>Olá, mundo!</Text>
// </View>
// );
// }

// import { View, Text } from 'react-native';
// export default function App() {
// return (
// <View style={{ padding: 20 }}>
// <Text style={{ fontSize: 24 }}>
// Bem-vindo!
// </Text>
// </View>
// );
// }

// <View style={styles.box}>
// <Text>Texto no app</Text>
// <Image source={logo} />
// </View> 

// import { StyleSheet, Text } from 'react-native';
// export default function App() {
// return (
// <Text style={styles.titulo}>Título</Text>
// );
// }
// const styles = StyleSheet.create({
// titulo: { fontSize: 22, color: 'tomato' },
// });

// import { Image } from 'react-native';
// export default function App() {
// return (
// <view>
// <Image
// source={{ uri: 'https://site.com/foto.png' }}
// style={{ width: 100, height: 100 }}
// />
// <Image source={require('./logo.png')} />
// </view>
// );
// }

// import { Button, TouchableOpacity, Text } from 'react-native';
// export default function App() {
// return (
// <view>
// <Button title="Clique" onPress={() => alert('Oi!')} />
// <TouchableOpacity onPress={() => alert('Toque!')}>
// <Text>Botão personalizado</Text>
// </TouchableOpacity>
// </view>
// );
// }

// import { useState } from 'react';
// import { TextInput } from 'react-native';
// export default function App() {
// const [nome, setNome] = useState('');
// return (
// <TextInput
// value={nome}
// onChangeText={setNome}
// placeholder="Digite seu nome"
// />
// );
// }

// import { ScrollView, Text } from 'react-native';
// export default function App() {
// return (
// <view>
// <ScrollView>
// <Text>Item 1</Text>
// <Text>Item 2</Text>
// <Text>Item 3</Text>
// {/* ...e muitos outros */}
// </ScrollView>
// </view>
// );
// }

// import { ScrollView, Text } from 'react-native';
// function Saudacao({ nome }) {
// return <Text>Olá, {nome}!</Text>;
// }
// export default function App() {
// return (
// <view>
// <Saudacao nome="Ana" />
// <Saudacao nome="Beto" />
// </view>
// );
// }