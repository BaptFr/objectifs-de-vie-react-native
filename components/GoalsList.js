import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';



export default function GoalsList({goals, onDelete, onPressGoal}) {
     return(
          <View style={[styles.listContainer,  styles.shadow]}>
               <FlatList
                    data={goals}
                    extraData={goals}
                    keyExtractor={(index) => index.toString()} //conversion index en string
                    renderItem={({ item, index }) => (  
                         <View key={index} style={styles.goalItem}>
                              
                              <Pressable style={styles.pressableContainer}
                                   onPress={() => onPressGoal(item, index)}
                              >
                                   <Text style={styles.goalText}>{item}</Text>
                              </Pressable>
                              <Pressable 
                                   style={styles.crossContainer}
                                   onPress={() => onDelete(index)
                                   }> 
                                   <Text
                                   style={[styles.cross,  styles.shadow]}
                                   >X</Text>
                              </Pressable>
                         </View>
                    )}
               />
              
               {/* {goals.map((goal, index) => (
                    
               ))} */}
    </View>
     )
}

 const styles = StyleSheet.create({
     listContainer:{
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center', 
          padding: 30,
     },
     goalItem:{
          width: '100%',
          padding: 6,
          display: 'flex', 
          flexDirection: 'row',
          justifyContent:'space-between',
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: 'rgba(62, 62, 62, 0.6)',
          marginTop: 4,
     },        
     goalText:{
          fontSize: 15,
          fontWeight: 'bold',
          color: '#61a6ff',
          textAlign: 'center',
     },
     cross:{
          color:'#ff0000',
          backgroundColor: '#e4e4e4',
          fontWeight: 'bold',
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 10,
          padding: 5,
     },
     pressableContainer:{
          width: '90%',
     },
     //Shadow
     shadow:{
          shadowColor: '#000000',
          shadowOffset: {width: -5, height: 5},
          shadowOpacity: 0.8,
          shadowRadius: 4,
     }
});