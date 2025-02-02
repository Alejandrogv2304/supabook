import {createClient} from '@supabase/supabase-js';
import  Constants  from 'expo-constants';

const supabaseUrl = Constants?.expoConfig?.extra?.supabaseUrl;
const supabaseAnonKey = Constants?.expoConfig?.extra?.supabaseAnonKey;

//Creamos un cliente usando createClient pasando url y anonkey
export const supabase = createClient(supabaseUrl, supabaseAnonKey)