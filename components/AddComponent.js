import { Pressable, StyleSheet, View, TextInput, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useState } from 'react';


//onPress en React Native
export default function AddComponent({onAddGoal}) {
    //Gestion d'états
    const [text, setText] = useState('');
    
    //Gestion de la saisie de l'input
    function handleAdd(){
        onAddGoal(text.trim());  
        setText('');
    };

    return(        
        <View style={styles.containerInput}>
            <TextInput
                placeholder='Nouvel objectif'
                maxLength={40}
                value={text}
                onChangeText={setText}
                style={styles.textInput}
            >
            </TextInput>
                <Ripple
                    style={styles.addButton}
                    onPress={handleAdd}
                    rippleColor="#000000"
                    rippleDuration={2000} 
                >
                    <Text style={styles.addButtonText}>AJOUTER</Text>
                </Ripple>             
        </View>
    )
}  

const styles = StyleSheet.create({
    containerInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 30,
        gap: 10,
    },
    textInput: {
        width: '50%',
        marginBottom: 0,
        padding: 15,
        color:'#000000',
        backgroundColor:'#ececec',
        borderRadius: 10,
    },
    addButton: {
        color: '#ffb2d7',
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fe6f24',
    },
    addButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',

    },
})

