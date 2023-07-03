import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',
        bottom: -180, // Ajusta el valor para que el menú se extienda más allá del contenedor
        width: '50%', // Ajusta el ancho del menú según sea necesario
        height: '165%', // Ajusta la altura del menú según sea necesario
        backgroundColor: '#fdcae1', // Estiliza el fondo del menú según sea necesario
        zIndex: 9999, // Asegura que el menú se muestre por encima de otros elementos
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'groove',
        borderRadius: 10
      },
    miniContainers : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        height: 70,
    },  
    letters: {

    }
     
  });
  
  export default styles;