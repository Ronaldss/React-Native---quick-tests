import { View } from 'react-native';

class JustifyContent extends Component {
    render(){
        return(
            // O atributo 'space-between' faz que os herdeiros compartilhem
            // igualmento os espaços disponivel pera view principal.
            // caso não seja declarado explicitamente nenhum view principal
            // ele utiliza todos o espaço disponivel do dispositivo.
            
            <View style={{
                flex:1,
                justifyContent:'space-between',
            }}>
                <View style={{width:50, height: 50, backgroundColor:'powderblue'}} />
            </View>
        );
    }
};


export default JustifyContent;