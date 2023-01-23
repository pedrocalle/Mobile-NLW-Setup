import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
export function HabitsEmpty() {
  const { navigate } = useNavigation()
  return (
    <Text className='text-zinc-400 text-base'>
      Você ainda não está monitorando nenhum hábito. { ' ' }

      <Text
      className='text-violet-400 text-base underline active:text-violet-500 ml-2'
      onPress={() => navigate('new')}
      >
        Aperte aqui para adicionar um!
      </Text>
    </Text>
  )
}