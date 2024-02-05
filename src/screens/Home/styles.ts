import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 38
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,

  },
  form:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 42,
    marginBottom: 42,
  },
  input:{
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12
  },
  buttonText:{
    color:'#fff',
    fontSize: 24
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listEmpityText:{
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    padding: 24
  }
})