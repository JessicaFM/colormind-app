<script>
    import { onMount } from 'svelte';
    import { apiColormind } from '../ApiColormind';
	import ColorBox from '../ColorBox.svelte';

    let randomPaletteParams = {
        model: "default"
    }

    let randomPalette = []
    onMount(async () => {
        randomPalette = await apiColormind(randomPaletteParams)
    })

    function changePalette() {
        randomPalette = apiColormind(randomPaletteParams)
    }
</script>
<div class="random-palette section-palette">
    {#await randomPalette}
    <div class="radom-palette-loader">
        <h1>Waiting...</h1>
    </div>
    {:then data}
    <div class="random-palette-body">
        <div class="col section-title">Random Palette</div>
        <div class="color-container"> 
            {#if data.result}
                <div class="row w-100 ml-0">
                    {#each data.result as color}
                        <div class="col">
                            <ColorBox rgbaColorArray={color} />
                        </div>
                    {/each}
                </div>			
            {/if}
        </div>
        <div class="w-100 d-flex justify-content-end pt-2 pb-3">
            <button class="btn btn-primary" on:click={ changePalette }>Change Palette</button>
        </div>
    </div>
    {:catch error}
        <p>An error occurred!</p>
    {/await}
</div>
<style lang="scss">
    @import '../../styles/common.scss';

</style>