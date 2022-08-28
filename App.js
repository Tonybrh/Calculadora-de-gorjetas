import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, Button, StyleSheet, BackHandler, ImageBackground } from 'react-native';
import styled from 'styled-components/native'

  //Criação de Componentes
const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  `;
const HeaderText = styled.Text`
  font-size:25px;
  color="black";
  `
const Input = styled.TextInput`
  width:90%;
  height:50px;
  font-size:18px;
  border-radius:10px;
  background-color:#EEE;
  margin-top:20px;
  padding:10px;
  `;
const CalcButton = styled.Button`
  margin-top:20px;
  `;
const ResulArea = styled.View`
  width:100%;
  margin-top:30px;
  background-color:#EEE;
  padding:20px;
  justify-content:center;
  align-items:center;
  `;
const ResultItemTitle = styled.Text`
  font-size:15px;
  `;
const ResultItem = styled.Text`
  font-size:15px;
  margin-bottom:30px;
  `;
const PctArea = styled.View`
  flex-direction: row;
  margin:20px;
`;
const PctItem = styled.Button`
  padding:30px;
`;
export default () => {
  //Declaraçao de states
  const [bill,setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);
  
  const calc = () =>{
    let nBill = parseFloat(bill);
    
    if(nBill){
      setTip( (pct/100) * nBill )
    }
  }
  useEffect(()=>{
    calc();
  }, [pct]);
  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />
      <PctArea>
        <PctItem title="5%" onPress={()=>setPct(5)}/>
        <PctItem title="10%" onPress={()=>setPct(10)}/>
        <PctItem title="15%"onPress={()=>setPct(15)}/>
        <PctItem title="20%"onPress={()=>setPct(20)}/>
      </PctArea>
      <CalcButton title={`Calcular ${pct}%`} onPress={calc}/>
      {tip > 0 &&
      <ResulArea>
      <ResultItemTitle>Valor da conta</ResultItemTitle>
      <ResultItem>R${parseFloat(bill).toFixed(2)}</ResultItem>
      
      <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
      <ResultItem>R${tip.toFixed(2)} ({pct})%</ResultItem>
      
      <ResultItemTitle>Valor Total</ResultItemTitle>
      <ResultItem>R$ {(parseFloat(bill)+tip).toFixed(2)}</ResultItem>
    </ResulArea>
      }
    </Page>
    
  );
}

  
