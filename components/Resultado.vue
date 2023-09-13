<template lang="">
    <div v-if="result.length != 0 && regressiveCount">
      <div class="regressive-count" v-if="start">
        <p>{{ NRegressiveCount }}</p>
      </div>
      <div class="result" v-if="showResult && !start">
        <p>{{ result }}</p>
      </div>
    </div>
    <div v-else>
      <div class="result" v-if="showResult">
        <p>{{ result }}</p>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>