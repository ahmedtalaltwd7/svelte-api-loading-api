// @ts-nocheck
/** @type {import('./$types').PageLoad} */
// @ts-ignore
export async function load({ fetch, setHeaders }) {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    const response = await fetch(url);
   
    setHeaders({
      age: response.headers.get('age'),
      'cache-control': response.headers.get('cache-control')
    });
   
    return response.json();
  }