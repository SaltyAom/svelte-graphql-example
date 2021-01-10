<script lang="ts">
	import menus from '../stores/menus'

	const save = (event: Event) => {
		let { value }: { value: string } = event.target[0]

		$menus.variables.name = value.toLowerCase()
	}
</script>

<form on:submit|preventDefault={save}>
	<input type="text" placeholder="Search" />
	<button>Search</button>
</form>
