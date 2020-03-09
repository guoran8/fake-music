<template>
    <div>
        <Header></Header>
        <Nav></Nav>
        <AppMain></AppMain>
    </div>
</template>

<script>
import { Header, Nav, AppMain } from './components'
export default {
    name: 'Layout',
    components: {
        Header,
        Nav,
        AppMain
    }
}
</script>

<style lang="postcss" scoped>

</style>