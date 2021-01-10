<script>
	import { createClient, setClient, query, defaultExchanges } from '@urql/svelte'

	const client = createClient({
		url: 'https://dreamin.saltyaom.com/graphql',
		exchanges: [...defaultExchanges]
	})

	setClient(client)

	query($menus)

	import Search from './components/searh.svelte'
	import menus from './stores/menus'
</script>

<Search />

<main>
	{#if $menus.fetching}
		<h1>Loading...</h1>
	{:else if $menus.error}
		<h1>Error</h1>
	{:else}
		<ul>
			{#if $menus.data.getMenuBy.length}
				{#each $menus.data.getMenuBy as menu}
					<li>{menu.name.th}</li>
				{/each}
			{:else}
				<li>Not found</li>
			{/if}
		</ul>
	{/if}
</main>
