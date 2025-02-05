import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import { useState, useEffect } from 'react';
import { supabase } from '@/src/lib/supabase';
import AddPostForm from '@/src/components/AddPostForm';
import { fecthPosts, Posts } from '@/src/lib/api';


export default function HomeScreen() {
  const [posts,setPosts] = useState<Posts>([])

  useEffect(() => {
    
   fecthPosts().then(data => setPosts(data));
  },[])

  //El content viene de AddPostForm 
  const handleSubmit = async(content:string ) => {
    const {data,error} = await supabase.from('posts').insert({content}).select();

    if(error){
      console.log(error)
    }else{
      setPosts([data[0], ...posts])
    }
  };

  return (
    <View style={styles.container}>
      <AddPostForm 
      onSubmit={handleSubmit}/>
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
