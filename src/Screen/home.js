import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import listEmployees from "../Components/List/listEmployees";

const Home = () => {  
    const [listOne, setListOne] = useState([])
    const [listTwo, setListTwo] = useState([])
    

    const ageEmployees = () =>{
      const arrayAge = [];   
      for(const content in listEmployees){
      let data = listEmployees[content];
      data.forEach((item)=>{         
        if(item.age === 27){
          arrayAge.push(item)
        }
      })
    }
    setListOne(arrayAge)
  }

  const orderAgeEmployees = () =>{
    let arrayEmployees = [];
    for(const conten in listEmployees){
      arrayEmployees = arrayEmployees.concat(listEmployees[conten]);     
    }
    arrayEmployees.sort((prev, cur) => prev.age < cur.age)    
    setListTwo(arrayEmployees)
  }


  const printAge = () =>{   
    return(
    <View style = {styles.container}>
      {
      listOne.map(({firstName, lastName, age}, index) => {
        return <Text style = {styles.items} key = {`${index}-${firstName}`} >{`${firstName} ${lastName} ${age}`}</Text>        
      })
      }
    </View>)
  }

  const printOrderAge = () =>{
    return(
      <View style= {styles.container}>
        {
          listTwo.map(({firstName, lastName, age}, index) => {
            return <Text style = {styles.items} key = {`${index}-${lastName}`}>{`${firstName} ${lastName} ${age}`}</Text>
          })
        }
      </View>
    )
  }


  return(    
    <View style = {styles.container} >
      <View style = {styles.buttonContainer}>
        <TouchableOpacity  onPress={()=>ageEmployees()}>
          <View style = {styles.boton}>
            <Text style = {styles.textBoton}>Personas con 27 años</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>orderAgeEmployees()}>
          <View style = {styles.boton}>
            <Text style = {styles.textBoton}>Personas ordenados del mayor a menor</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style = {styles.listAge}>{printAge()}</View>
        <View style = {styles.listOrderAge}>{printOrderAge()}</View>
      </ScrollView>
    
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,    
  },
  buttonContainer:{
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
  },
  boton:{
    backgroundColor: '#D2B48C',
    paddingTop: 10,
    paddingHorizontal: 2,     
    borderRadius:10, 
  },
  textBoton:{
    maxWidth: '55%',
    fontSize: 15,
    textAlign: "justify",
    color: '#FFF8DC',
  },
  items:{
    fontSize: 20,
    color:'#8B4513',
    borderColor: '#8B4513',
    borderWidth: 1,
    borderRadius:8,
    backgroundColor:'#FFF8DC',
  },
  listAge:{
    margin: 20, 
  },
  listOrderAge:{
    margin: 20, 
  },
})
export default Home;