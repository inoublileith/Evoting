import React from 'react'
import { Text, View, TextInput,Image, Button, Alert, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Constants from 'expo-constants'
import { AuthContext } from '../../context'
export default function Register({ navigation }) {
  const { signUp } = React.useContext(AuthContext)
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  })
  const onSubmit = (data) => {
    console.log(data)
    return signUp(data.username, data.email, data.password)
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
      <Text style={styles.label}>Nom :</Text>
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
        name='name'
        rules={{ required: true }}
      />
      <Text style={styles.label}>Prénom :</Text>
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
        name='prenom'
        rules={{ required: true }}
      />
      {errors.prenom && <Text>This is required.</Text>}
      <Text style={styles.label}>E-mail :</Text>
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
        name='email'
        rules={{ required: true }}
      />
      {errors.email && <Text>This is required.</Text>}
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
          title='Inscription'
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title='Se connecter'
          onPress={() => navigation.push('SignIn')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 0,
    marginLeft: 0,
  },
  button: {
    marginTop: 15,
    color: 'white',
    height: 40,
    backgroundColor: '#666666',
    borderRadius: 4,
  },
  image: {
    width: '40%',
    height: '30%',
    resizeMode: 'contain',
    top: 0,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 30,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#f8f8f8',
    color: '#222',
    padding: 8,
    borderRadius: 20,
  },
})
