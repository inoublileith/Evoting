import React from 'react'
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Constants from 'expo-constants'
import { AuthContext } from '../../context'
export default function Login({ navigation }) {
  const { signIn } = React.useContext(AuthContext)
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const onSubmit = (data) => {
    console.log(data)
    return signIn(data.username, data.password)
  }

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    }
  }

  console.log('errors', errors)

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />

      <Text style={styles.label}>Nom d'utilisateur :</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name='username'
        rules={{ required: true }}
      />
      {errors.username && <Text>This is required.</Text>}
      <Text style={styles.label}>Mot de passe :</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
        name='password'
        rules={{ required: true }}
      />
      {errors.password && <Text>This is required.</Text>}

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title='Connexion'
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="S'inscrire"
          onPress={() => navigation.push('CreateAccount')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 1,
    marginLeft: 0,
    marginTop: 10,
  },
  image: {
    width: '40%',
    height: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  button: {
    marginTop: 15,
    height: 40,
    backgroundColor: '#666666',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#f1f1f1',
    color: '#222',
    padding: 10,
    borderRadius: 4,
  },
})
