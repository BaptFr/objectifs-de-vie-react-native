
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Pressable, Text, View, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import AddComponent from './components/AddComponent';
import GoalsList from './components/GoalsList';
//Image background
const backgroundImage = { url: 'https://img.freepik.com/photos-gratuite/rocket-volant-dans-espace_23-2150378609.jpg?semt=ais_hybrid&w=740' }


//Fonction App
export default function App() {

  //Gestion états/ données
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3x /semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [editedGoal, setEditedGoal] = useState('')
  //Modif d'un objectif
  const PressedGoal = (goal, index) => {
    setSelectedGoal({ goal, index });  //Stocke l'obj selectionné
    setEditedGoal(goal); // initialise
    setModalVisible(true); // Ouvre la modale
  }

  function handleModify() {
    const updatedGoals = [...goals];
    updatedGoals[selectedGoal.index] = editedGoal;
    //maj goals
    setGoals(updatedGoals);
    //fermer modal
    setModalVisible(false);
    //reset states
    setSelectedGoal(null);
  };

  //Ajout d'un objectif
  function AddGoal(newGoal) {
    // [...current, ] repprend et ajout
    setGoals(current => [...current, newGoal]);

  };

  //Supp d'un objectif / index
  function DeleteGoal(index) {
    //ignorer _ , 
    setGoals(current => current.filter((_, i) => i !== index));

  };


  //Rendu
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
      >
        <Text
          style={styles.title}
        >
          OBJECTIFS DE VIE
        </Text>
        <GoalsList
          goals={goals}
          onDelete={DeleteGoal}
          onPressGoal={PressedGoal}
        />
        <AddComponent
          onAddGoal={AddGoal}
        />

        <View
          style={styles.modalContainer}
        >
          {/************ MODAL *****************/}
          <Modal
            animationType='slide'
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(false) }}
          >
            <View
              style={[styles.modal, styles.shadow]}
            >
              <Pressable
                style={styles.crossContainer}
                onPress={() => { setModalVisible(false) }}
              >
                <Text
                  style={[styles.cross, styles.shadow]}
                >X</Text>
              </Pressable>
              <Text style={styles.textModal}>
                Modifier votre objectif :
              </Text>
              <View style={styles.containerInput}>
                <TextInput
                  placeholder={selectedGoal?.goal || ''} //gérer cas 'null'
                  maxLength={40}
                  value={editedGoal}
                  onChangeText={setEditedGoal}
                  style={styles.textInput}
                >
                </TextInput>
                  <Pressable
                    onPress={handleModify}
                    style={[styles.modifyButton, styles.shadow]}
                    accessibilityLabel="Bouton modifier un objectif"
                  >
                    <Text style={styles.modifyButtonText}>VALIDER MODIFICATION</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}


// STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9d8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fe6f24',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
    paddingTop: 100,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    backgroundColor: '#f2e2bb'

  },
  modal: {
    position: 'fixed',
    top: '30%',
    left: 50,
    width: 300,
    height: 400,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    borderRadius: 20,
    backgroundColor: '#fff8dc',
    borderWidth: 3,  
  },
  textModal: {
    fontSize: 30,
    textAlign:'center',
    fontWeight: 'bold',
    color: '#000000'

  },
  crossContainer: {
    margin: 10,
    alignSelf: 'flex-end',

  },
  cross: {
    fontSize: '30',
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 40,

  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  containerInput: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textInput: {
    width: '80%',
    marginBottom: 0,
    padding: 15,
    color: '#000000',
    backgroundColor: '#cccccc',
    borderRadius: 5,
    borderWidth: 2,
    borderRadius: 10,
    fontStyle: 'italic',
    fontSize: 15,
  },
  modifyButton: {
    padding: 10,
    marginTop: 15,
    color: '#1e1051',
    backgroundColor: '#98eb9d',
    borderWidth: 1,
    borderRadius:10,
  },
  modifyButtonText: {
    fontSize: 15,
    fontWeight : 'bold',
  }
});
