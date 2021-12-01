<script>
    import { onMount } from 'svelte';
    import { apiColormind } from '../ApiColormind';
	import ColorBox from '@/components/ColorBox.svelte';

    let randomPaletteParams = {
        model: "default"
    }

    let randomPalette = []
    onMount(async () => {
        randomPalette = await apiColormind(randomPaletteParams)
    })
</script>
<div class="randomPalette">
    {#await randomPalette}
    <div class="radomPaletteLoader">
        <h1>Waiting...</h1>
    </div>
    {:then data}
    <div class="randomPaletteBody">
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
</div>