import { StyleSheet } from 'react-native';


export const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#131016',
        padding:24,
    },
    logo:{ 
        marginTop:45,
         alignSelf: 'center'
    },
    input:{
        flex:1,
        backgroundColor:'#1F1E25',
        height:56,
        borderRadius:5,
        color:"#FFF", 
        padding:16,
        fontSize:16,
        marginRight:7
    },
    buttonText:{
        color:"#FFF", 
        fontSize:26
    },
    button:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:'#4EA8DE',
        alignItems:'center',
        justifyContent:"center"
    },  
    form:{
        width:'100%',
        flexDirection:'row',
        marginTop:36,
        marginBottom:42,
        
    }, 
    listEmputText:{
        color:"#FFF",
        fontSize:16, 
        textAlign:"center"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleCriadas: {
        color: '#4EA8DE', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleConcluidas: {
        color: '#8284FA', 
        fontSize: 16,
        fontWeight: 'bold',
      },
      counter: {
        backgroundColor: '#333333',
        borderRadius: 20,
        marginLeft: 8,
        paddingVertical: 2,
        paddingHorizontal: 8,
      },
      counterText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 12,
      },
      divider: {
        height: 1,
        backgroundColor: '#333333', 
        marginVertical: 12,
      },
      messageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        width: 56,
        height: 56,
        marginBottom: 12,
        tintColor: '#808080', 
      },
      messageTitle: {
        color: '#808080', 
        fontWeight: 'bold',
        fontSize: 14,
      },
      messageSubtitle: {
        color: '#808080',
        fontSize: 12,
      },
});