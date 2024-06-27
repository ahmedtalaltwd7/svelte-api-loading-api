// @ts-nocheck
// @ts-ignore
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({}) => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300')

  let item = (await res).json();
  if (item) {
    return { data:item } 
   }

    throw error(404, 'Not found'); 

  
  
   
}