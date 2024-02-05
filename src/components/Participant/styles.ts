import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  nameContainer:{
    backgroundColor: '#1f1e25',
    marginRight: 12,
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 16
  },
  name:{
    color: '#fff',
    fontSize: 16,
  },
  buttonText:{
    color:'#fff',
    fontSize: 24
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center'
  }
})