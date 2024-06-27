<script>
  export let data



let arr=data.data.results
  
    

console.log(data.er);

// let twd =arr.map(getFullName);

// function getFullName(item) {
//   return{
//     item.name
//   } 
// }

let loadedPokemon=[];
async function getUsers() {
  loadedPokemon = arr.map((users, url) => ({
       name: users.name,
       url: users.url
}))
 console.log(loadedPokemon);
return loadedPokemon ;

}


const promise = getUsers();






</script>

<div>
  {#await promise}
 lodind
  
     
  {:then user}
  
  <div class="py-2 grid gap-4 md:grid-cols-2 grid-cols-1">
      {#each user as user}
      <a  class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href='/home'>
 
       
          <h2 class="uppercase text-2xl">{user.url} {user.name}</h2>
      </a>
      {/each}
  </div>
  {:catch error}
      <p style="color: red">{error.message}</p>
  {/await}
  </div>