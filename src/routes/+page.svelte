<script>
	export let data;
</script>

<main>
	<a href="/auth" rel="noopener noreferrer">Login</a>
	<a href="/login" rel="noopener noreferrer">Login 2</a>
	<ul>
		{#each data.countries as country}
			<li>{country.name}</li>
		{/each}
	</ul>
</main>
