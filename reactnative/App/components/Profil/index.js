
      
      const { signOut } = React.useContext(AuthContext)
      import React from 'react'
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native'
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
  }

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    }
  }

  console.log('errors', errors)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
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
      <Text style={styles.label}>Password</Text>
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

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title='login'
          onPress={() => signIn()}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title='Register'
          onPress={() => navigation.push('CreateAccount')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: 'black',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: 'gray',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
})
