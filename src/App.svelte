<script>
	import ColorBox from './components/ColorBox.svelte';

	let url = "http://colormind.io/api/";
	var params = {
		model : "default",
		input : [[44,43,44],[90,83,82],"N","N","N"]
	};
	const settings = {
        method: 'POST',
		body: JSON.stringify(params)
    };

	const fetchPalete = (async () => {
		const response = await fetch(url, settings);
		return await response.json();
	})()
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

{#await fetchPalete}
	<p>Waiting...</p>
{:then data}
	<div class="color-container">
		{#each Array.from(data.result) as color}
			<ColorBox rgbaColorArray={color} />
		{/each}
	</div>
{:catch error}
	<p>An error occurred!</p>
{/await}