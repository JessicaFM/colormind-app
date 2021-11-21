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
		reloadPalette();
	}

	async function reloadPalette() {
		const response = await fetch(url, settings);
		console.log("reloading palette")
		return await response.json();
	}

	let palette = [];
	onMount((async) => {
		console.log("onMount")
		console.log("Loading palette")
		palette = reloadPalette();
	});

</script>

<style>
	.body {
		min-height: 120px;
	}
	.color-container {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		width: 100%;
		min-height: 120px;
		background: #ccc;
	}
</style>

<div class="main">
	{#await palette}
		<div class="body">
			<h1>Waiting...</h1>
		</div>
		{:then data}
			<div class="body container">
				<div class="color-container"> 
					{#if data.result}
						<div class="row w-100">
							{#each data.result as color}
								<div class="col">
									<ColorBox rgbaColorArray={color} />
								</div>
							{/each}
						</div>			
					{/if}
				</div>
			</div>
		{:catch error}
			<p>An error occurred!</p>
	{/await}
	<div class="">
		<button on:click={callReload}>Reload Palette</button>
	</div>
</div>
