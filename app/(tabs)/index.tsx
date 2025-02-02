import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import { useState, useEffect } from 'react';
import { supabase } from '@/src/lib/supabase';


export default function TabOneScreen() {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fecthPosts= async() =>{
    const {data, error} = await supabase.from('posts').select('*');

    if(error){
      console.log(error)
    }else{
      setPosts(data)
    }
    }
   fecthPosts();
  },[])

  console.log(posts)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) =><Text>{item.content}</Text>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
