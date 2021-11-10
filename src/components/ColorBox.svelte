<script>
    export let rgbaColorArray;
    let rgbaColor = "red";

    console.log(rgbaColorArray.toString());
    console.log(rgbaColor);
</script>

<style>
    .color-item {
        padding: 10px;
    }
    .color-box {
        width: 100px;
        height: 100px;
    }
    .color-item>.color-box {
        flex: 1
    }
</style>

<div class="color-item">
    <div class="color-box" style="background-color: rgba({rgbaColorArray.toString()})"></div>
</div>