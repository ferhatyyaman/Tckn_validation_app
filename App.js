import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image,TouchableOpacity } from 'react-native';
import TCNOKontrol from "tckn-validator";
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [tcno, setTcno] = useState('');
  const [username, setUsername] = useState('');

  const handleChangeTCNO = (text) => {
    setTcno(text);
  }

  const handleChangeUsername = (text) => {
    // Kullanıcı adında sadece küçük harfler ve sayılar olmasını sağlama
    const formattedText = text.replace(/[^a-z0-9]/g, '');
    setUsername(formattedText);
  }

  const isUsernameValid = (username) => {
    // Kullanıcı adının geçerli olup olmadığını kontrol etme
    // Örneğin, minimum uzunluğu kontrol edebilirsiniz:
    if (username.length >= 3) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <View style={styles.container}>

        <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />

      <Text style={styles.label}>Kullanıcı ismi:</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" />
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={handleChangeUsername}
        />
      </View>

      <Text style={styles.label}>TC Kimlik Numarası:</Text>
      <View style={styles.inputContainer}>
        <Icon name="id-card" size={20} color="#000" />
        <TextInput
          style={styles.input}
          value={tcno}
          onChangeText={handleChangeTCNO}
          keyboardType="numeric"
        />
      </View>
      <TCNOKontrol TCNO={tcno} username={username} />
      {username.length > 0 && (
        <View style={styles.validationResult}>
          <Text style={isUsernameValid(username) ? styles.validText : styles.invalidText}>
            {isUsernameValid(username) ? 'Geçerli kullanıcı adı' : 'Kullanıcı adı geçersiz'}
          </Text>
        </View>
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  label: {
    marginTop:10,
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 55,
    marginLeft: 10,
  },
  validationResult: {
    marginTop: 5,
    
  },
  validText: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  invalidText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  btn: {
    marginTop: 10 ,

  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    height: 110,
    width: 180,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default App;
