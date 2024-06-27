<!-- <script>
	const fetchImage = (async () => {
		const response = await fetch("http://localhost:5000/api/v1/auth/gettours")
		const post = response.data.
    return await response.json()
	})()
</script> -->

<script>

     import { fly } from 'svelte/transition';

	 let loadedPokemon=[];
     let twd=false;
	async function getUsers() {
	  let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=300");
	  let users = await response.json();
	   loadedPokemon = users.results.map((users, index) => ({
		name: users.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
    }));
	 console.log(loadedPokemon.length);
	 const ar=loadedPokemon.length;
	 console.log(ar/10);
	 const citrus = loadedPokemon.slice(0, 3);
	 
	 console.log(citrus); 
	 return loadedPokemon ;
	  
	}
	
	const promise = getUsers();




	

//
console.log(loadedPokemon); // 15

  </script>





<div>
	{#await promise}
	
	<div class="bg-red-400  m-0 absolute top-0 h-0 w-full my-0 "><progress class="progress progress-primary w-100"></progress>   </div>
		<Mo twd={true}/> 
	{:then user}
	
    <div class="py-2 grid gap-4 md:grid-cols-2 grid-cols-1">
		{#each user as user}
		<a  class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${user.id}`} transition:fly>
   
			<h2 class="uppercase text-2xl">{user.id}. {user.name}</h2>
		</a>
		{/each}
    </div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	</div>
	
    <!-- svelte-ignore missing-declaration --> 
    <!-- svelte-ignore component-name-lowercase -->
   

