// in a +page.js or +page.server.js endpoint
// copy over your load function from before

export const load = async (/** @type {{ params: { id: any; }; }} */ page) => {
  const id = page.params.id;
let loading = false;
const url = `https://pokeapi.co/api/v2/pokemon/1`;
  		const res =  fetch(url);
  		let pokeman = (await res).json();
     
      return { pokeman,loading };

  }