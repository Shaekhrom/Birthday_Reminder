import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        
        backgroundColor: '#FEC8D8',
        zIndex: 1, //change background priority
        height: 130,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 2,
    },
    logoImage: {
        width: 200,
        height: 120,
        resizeMode: "contain"
    },
    menuButton: {
        borderWidth: 2.5, // Establece el grosor del borde
        borderColor: 'black', // Establece el color del borde
        borderRadius: 15
    }
  });
  
  export default styles;