import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEC8D8',
        
    },
    
    addContactContainer: {
        paddingTop: 15,
        paddingBottom: 15
    },

    contactListLetterBox: {
        justifyContent: 'center', 
        alignItems: 'center', 
    },

    contactListLetter: {
        paddingBottom: 20,
        paddingTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#f9a59a',
        overflow: 'hidden',
        width: '80%'
    },

    backToHome: {
        position: 'absolute',
        bottom: 0
    },

    contactList: {
        paddingLeft: '5%',
        paddingTop: '5%',
        paddingRight: '5%',
    },

    contactItem: {
       borderWidth: 1,
       borderRadius: 20,
       paddingTop: '3%',
       paddingBottom: '3%'
    },

    globalContactInfo: {
        fontWeight: 'bold',
        paddingLeft: '5%',
    },

    personalContactInfo: {
        paddingLeft: '5%'
    },
    flatList: {
        height: 400
    }
  });
  
  export default styles;