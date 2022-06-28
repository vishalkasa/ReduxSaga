import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {View,Text,StyleSheet} from 'react-native'
import { getUser } from "./redux/ducks/user";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);
  const styles=StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    login:{
      fontWeight: "bold",
      fontSize: 30,
      color: "black",
      marginBottom: 20
    }
  })
return(
<View style={styles.container}>
<Text>
  {user ? <Text style={styles.login}>Hello {user.name} {user.last_name}</Text>:<Text></Text>}
</Text>

</View>
)


}