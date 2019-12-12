import { StyleSheet } from 'react-native';

const Estilos = StyleSheet.create({
      fundo:{
        flex:1,
        flexWrap:'wrap',
        width:355,
        // height:200,
        backgroundColor:'#4B0082',
        textAlign:"center",
        flexDirection:'row'
      },
      pagina1:{
        width:100,
        height:100,
        backgroundColor:'yellow',
        marginRight:2
      },
      pagina2:{
        width:100,
        height:100,
        backgroundColor:'orange',
        marginRight:2
      },            
      titulo:{
        color:'black',
        fontSize:20,
        textAlign:"center"
      },
      texto:{
        color:'#1CF',
        fontSize:18,
        textAlign: "center"
      }
});
export { Estilos };