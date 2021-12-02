<script>
	import RandomPalette from './components/randomPalette/RandomPalette.svelte';
</script>
<style lang="scss">
    @import './styles/common.scss';
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
	.main {
		padding-top: 50px;
	}
</style>
<div class="main">
	<div class="container">
		<RandomPalette />
	</div>
</div>