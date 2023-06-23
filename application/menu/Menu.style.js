import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',
        bottom: -240, // Ajusta el valor para que el menú se extienda más allá del contenedor
        width: '50%', // Ajusta el ancho del menú según sea necesario
        height: '300%', // Ajusta la altura del menú según sea necesario
        backgroundColor: '#fdcae1', // Estiliza el fondo del menú según sea necesario
        zIndex: 9999, // Asegura que el menú se muestre por encima de otros elementos
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'groove',
        borderRadius: 10
      },
     
  });
  
  export default styles;