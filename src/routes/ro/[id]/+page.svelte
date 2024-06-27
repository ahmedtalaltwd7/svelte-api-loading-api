<!-- svelte-ignore missing-declaration -->
<!-- <script>
import { onMount } from "svelte";

let data =[];
onMount(async () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
  .then(response => response.json())
  .then(data => {
		console.log(data);
   
  }).catch(error => {
    console.log(error);
    return [];
  });
});
</script> -->

<!-- 
<script context="module">
    //import { getPokemonById } from "../stores/storep";
    let id;
    export async function load(page) {
        id = page.params.id;
        
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
        console.log("ccc"+id);
        return { props: { pokeman,id }};
    }

    

</script>
<script> 
    export let pokeman; 
    export let id; 
    // @ts-ignore
   const type = pokeman.types[0].type.name;
</script>
<svelte:head>
	<title>Pokedex - {pokeman.name}</title> 
</svelte:head>
{id}
<div class="flex flex-col items-center">

    <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
    <p>Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
        | Weight: <strong>{pokeman.weight}</strong>
    </p>
    <img class="card-image" src={pokeman.sprites['front_default']} 
    alt={pokeman.name}
    />
</div> -->

<!-- <script>
    /**
* @param {{ params: { id: any; }; }} page
* @param {(arg0: string) => any} fetch
* @param {any} session
* @param {any} context
*/let id;
    async function load(page, fetch, params, context) {
    
    id = page.params.id;
      const res = `https://pokeapi.co/api/v2/pokemon/${page.params.id}`;
      // @ts-ignore
      const data = await res.json();
  console.log(id)
      // @ts-ignore
      if (res.ok) {
        return data;
      } else {
        throw new Error(data);
      }
    }
  </script>


 {#await load()}
<p>loading</p>
{:then data}
{#each data as item}
    <li>{item.id}. {item.name}</li>
  {/each}
{:catch error}
<p style="color: red">{error.message}</p>
{/await} -->

<script>
  export /**
* @type {{ pokeman: { name: any; sprites: { [x: string]: string | null | undefined; }; types: { type: { name: any; }; }[]; weight: any; }; id: any; }}
*/
   let data;
    // @ts-ignore
    import { page } from "$app/stores";
    
       export let users2=null;
    
       
        const  slug  = $page.params.id;
        async function getUsers() {
          let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
          let users = await response.json();
          users2=users.name;
        //console.log(users2) 
          return users;
        }
       
        const promise = getUsers();
    
      </script>
    
    
    
    <svelte:head>
        <title>Pokedex - {data.pokeman.name}{data.id}</title> 
    </svelte:head>
    <div>
    <h1> {data.pokeman.name}</h1> 
  
        {#await promise}
    
            <p>Loading...</p>
        {:then user}
            
            
        
                <h2 class="uppercase text-2xl">{data.pokeman.name}</h2>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img src={data.pokeman.sprites['front_default']} alt="Shoes" class="rounded-xl">
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">{data.pokeman.name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                        <a href="/form" >fffffff</a>
                      </div>
                    </div>
                  </div>
                  <p>Type: <strong>{data.pokeman.types[0].type.name}</strong> | Height: <strong>data.pokeman.height}</strong>
                    | Weight: <strong>{data.pokeman.weight}</strong>
                </p>
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
        </div>
    
        
          