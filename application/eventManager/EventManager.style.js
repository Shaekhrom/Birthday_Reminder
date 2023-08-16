import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEC8D8',
        flex: 1
        
    },
    
    addContactContainer: {
        paddingTop: '1%',
        paddingBottom: '1%',
        marginLeft: -30,
        width: 150,
        
    },

    contactListLetterBox: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#D291BC',
        borderWidth: 2,
        borderRadius: 30,
        overflow: 'hidden',
        width: '95%',
        
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
        height: 400,
        paddingLeft: '5%',
        paddingRight: '5%',
        
    },
    peronalDataBox: {
        paddingTop: 10,
        borderWidth: 1,
        borderRadius: 50,
        
    },
    itemAligner: {
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    generalInfo: {
    marginTop: 10,
       marginLeft: 30,
        
    },
    textInfo: {
        fontSize: 18,
        paddingBottom: 10,
        paddingRight: 20
    },
    searchPlusAddContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    searchBar: {
        width: 200,
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10
    },
    dataAligner: {
        flexDirection: 'row',
        alignItems: 'center',
    }
  });
  
  export default styles;