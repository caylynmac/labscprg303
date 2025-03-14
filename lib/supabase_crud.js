
import supabase from "./supabase";
	
const TABLE_NAME = "tasklist";

export async function getTasks(){
    const { data, error } = await supabase.from(TABLE_NAME).select("*");
    if(error){
    throw error;
    }
    return data;
    
}

// export async function addUsers(items){

//     const { data, error } = await supabase
//     .from('tasklist')
//     .insert([
//         items.stringify()
//     ])
//     .select()
            
// }
