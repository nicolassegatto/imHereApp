import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { participants } from "../../api/participants";
import React from "react";
import uuid from 'react-native-uuid'

export function Home() {
  const [participantsList, setParticipantsList] = React.useState(participants)
  const [participant, onChangeParticipant] = React.useState('')

  function handleParticipantAdd(participant: string) {
    const id = uuid.v4();
    const name = participant.replace(/\s+/g, ' ');

    if (participantsList.find(obj => { return obj.name == name })) {
      return Alert.alert("Participante já cadastrado", `O participante ${name}, já se encontra na lista!`)
    }

    if (!name) {
      return Alert.alert("Campo vazio", `Para cadastrar um participante, é necessário inserir o nome dele!`)
    }
    if (!name.replace(/ /g, '')) {
      return Alert.alert("Campo vazio", `Para cadastrar um participante, o nome nao pode ser em branco!`)
    }

    setParticipantsList( [...participantsList, { id: id.toString(), name: name }])
    onChangeParticipant('')
    return Alert.alert("Adicionado", `${name}, foi adicionado como participante para o id: ${id}!`)
  }

  function handleParticipantRemove({id, name}) {
    Alert.alert("Remover", `Remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => {
          const updatedParticipantsList = participantsList.filter(obj => obj.name !== name)
          
          setParticipantsList(updatedParticipantsList)
          return Alert.alert('Removido', `${name}, foi removido da lista de participantes!`)
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Aniversário João!</Text>
      <Text style={styles.eventDate}>Domingo - 04 de Fevereiro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          value={participant}
          onChangeText={onChangeParticipant}
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6b6b6b'
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(participant)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ListEmptyComponent={() => {
          return <Text style={styles.listEmpityText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista!
          </Text>
        }}
        showsVerticalScrollIndicator={false}
        data={participantsList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleParticipantRemove(item)}
          />
        }}
      />

      {/* {
        ****para usar com "scrollView"****

        participants.map((obj) => {
          return <Participant
            key={obj.id}
            name={obj.name}
            onRemove={handleParticipantRemove}
          />
        })
      } */}

    </View>
  )
}