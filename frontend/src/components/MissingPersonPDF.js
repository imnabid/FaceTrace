import React, { useEffect } from 'react'
import DataContextProvider from './Context'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, Font } from '@react-pdf/renderer';
import Image1 from './Images/nepali1.jpg';
import Citizenship from './Images/citizenship.png'
import { MdDownload } from 'react-icons/md'
import { Paper } from '@mui/material';
import {useContext} from 'react'
import { DataContext } from './Context';


Font.register({ family: 'Times-Roman', fontWeight: 'bolder'});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily:'Times-Roman'
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom:20,
    fontFamily:'Times-Roman',
    fontWeight:'bolder'
  
  },
  image:{
    height:'125px',
    width:'125px',
    
    marginLeft:190, 
    marginBottom:20 
    

  },
  text: {
    margin: 5,
    fontSize: 15,
    textAlign: "justify",
   fontWeight:10,
   fontFamily:'Times-Roman',
   
   

  },
 
  titley: {
    fontSize: 16,
    textAlign: "center",
    margin:5,
    fontFamily:'Times-Roman',
    fontWeight:'bolder'
  
  },
  imagex:{
    
    height:'270px',
    width:'320px',
    marginTOp: 5,
    marginLeft:100, 
 
    

  },
   
 
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily:'Times-Roman',
    
  
  },
});



const MissingPersonPDF  = ({people}) => {
useEffect(()=> {
  console.log(people)

},[people])
    return(
  <Document>
    {people.map((value,index)=>(

    <Page key={index} size="A4" style={styles.body}>
    <Text style={styles.title}>Details about the Missing Person</Text>
    <Image style={styles.image} src={value.image}/>
    
        
        <Text style={styles.text}>Name: {value.name} </Text>
        <Text style={styles.text}>Age: {value.age}</Text>
        <Text style={styles.text}>Gender: {value.gender}</Text>
        <Text style={styles.titley} >Despcription about the Missing Person: </Text>
        <Text style={styles.text}>
         {value.description}
        </Text>
        <Text style={styles.text}>Informer Name:{value.informerName}</Text>
        <Text style={styles.text}>Relation to the person:{value.informerRelation}</Text>
        <Text style={styles.text}>Contant No.: {value.informerContactno}</Text>
        <Text style={styles.titley} >Citizenship Information: </Text>
       
        <Image style={styles.imagex} src={value.citizenship}/>
         <Text
            style={styles.pageNumber}
            render={({ pageNumber }) =>
              `${pageNumber}`

            }
          />


    </Page>
    ))}
  </Document>

  )}

export default MissingPersonPDF;

