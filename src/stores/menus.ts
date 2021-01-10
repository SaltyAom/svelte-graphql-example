import { operationStore } from '@urql/svelte'

interface GetMenuBy {
	getMenuBy: {
		name: {
			th
		}
	}
}

interface GetMenuByArgs {
	name: string
}

const menuStore = operationStore<GetMenuBy, GetMenuByArgs>(
	`
	query($name: String!) {
		getMenuBy(name: $name) {
			name {
				th
			}
			price
		}
	}
`,
	{
		name: ''
	}
)

export default menuStore
