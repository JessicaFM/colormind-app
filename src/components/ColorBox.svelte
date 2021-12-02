<script>
    export let rgbaColorArray;
</script>

<style lang="scss">    
    .color-item {
        padding: 10px;
        flex: 1;
        .color-box {
            width: 100%;
            min-height: 100px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;        }
    }
</style>

<div class="color-item">
    <div class="color-box" style="background-color: rgba({rgbaColorArray.toString()})"></div>
</div>