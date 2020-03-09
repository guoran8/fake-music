<template>
    <div class="nav">
        <router-link to="/recommned" class="nav__link">推荐</router-link>
        <router-link to="/singer" class="nav__link">歌手</router-link>
        <router-link to="/rank" class="nav__link">排行</router-link>
        <router-link to="/search" class="nav__link">搜索</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
    .nav {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        height: 48px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.72);
        border-bottom: 1px solid #e0e0e0;
    }

    .nav__link {
        color: #333;
        text-decoration: none;
    }

    .router-link-active {
        border-bottom: 2px solid #ff2f56;
    }

</style> 