import { supabase } from "./supabase";

export const fecthPosts= async() =>{
    const {data, error} = await supabase.from('posts').select('*').order('created_at',{
      ascending: false
    });

    if(error){
        return [];
      console.log(error)
    }else{
      return data;
    }
    }

    export type Posts = Awaited<ReturnType<typeof fecthPosts>>;