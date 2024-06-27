
//import { getPokemonById } from "../stores/storep";
/**
 * @param {{ params: { id: any; }; }} page
 */
export async function load(page) {
    const id = page.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		let pokeman = (await res).json();
   
    return { pokeman,id }; 
}
