<script>
    export let rgbaColorArray;
    let rgbaColor = "red";

    console.log(rgbaColorArray.toString());
    console.log(rgbaColor);
</script>

<style>
    .color-item {
        padding: 10px;
        flex: 1;
    }
    .color-box {
        width: 100%;
        min-height: 100px;
    }
</style>

<div class="color-item">
    <div class="color-box" style="background-color: rgba({rgbaColorArray.toString()})"></div>
</div>