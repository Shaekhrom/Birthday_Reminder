import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 30,
        backgroundColor: '#FEC8D8',
        zIndex: 1 //change background priority
    },
    logoImage: {
        resizeMode: 'contain',
        width: 200,
        height: 100,
        marginTop: -10
    },
    headerIcons: {
        marginTop: 18
    },
    copyright: {
        position: 'absolute',
        bottom: 0,
        left: 0
    }
  });
  
  export default styles;