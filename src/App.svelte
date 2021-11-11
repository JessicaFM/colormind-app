<script>
	import { onMount } from 'svelte';

	import ColorBox from './components/ColorBox.svelte';

	//let palette = []
	let url = "http://colormind.io/api/";
	var params = {
		model : "default",
		input : [[44,43,44],[90,83,82],"N","N","N"]
	};
	const settings = {
        method: 'POST',
		body: JSON.stringify(params)
    };

	function callReload() {
		console.log("H")
		fetchPalete =  reloadPalette();
	}

	async function reloadPalette() {
		const response = await fetch(url, settings);
		return await response.json();
	}

	let palette = [];
	onMount((async) => {
		console.log("Loading palette")
		palette = reloadPalette();
	});

</script>

<style>
	.color-container {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		width: 100%;
		min-height: 100px;
		background: #ccc;
	}
</style>

<div class="main">
	{#await palette}
		<p>Waiting...</p>
		{:then data}
			<div class="container">
				<div class="color-container">
					{#each Array.from(data.result) as color}
						<ColorBox rgbaColorArray={color} />
					{/each}
				</div>
				
			</div>
		{:catch error}
			<p>An error occurred!</p>
	{/await}
	<div class="">
		<button on:click={callReload}>Reload Palette</button>
	</div>
</div>
