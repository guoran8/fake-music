<template>
    <div class="recommend">

    </div>
</template>

<script>
import {getRecommend} from '@/api/recommend'

export default {
    data: () => ({

    }),
    mounted: function() {
        this._getRecommend()
    },
    methods: {
        _getRecommend: () => {
            getRecommend().then(res=>{
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="postcss" scoped>

</style>