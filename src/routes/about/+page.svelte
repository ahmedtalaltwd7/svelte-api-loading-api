<script>
    export let data

    
  </script>
  {data.loading=true}
  <h1>Use the {data.pokeman.name}</h1>

  {#each data as todo}
	<div>
		{todo.pokeman.name} 

    </div>  
{/each}  