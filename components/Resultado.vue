<template lang="">
    <div class='toplv-result'>
      <!-- <div v-if="regressiveCount">
        <div class="regressive-count" v-if="start">
          <p class="glow">{{ count }}</p>
        </div>
      </div>   -->
        <!-- v-if="showResult && !start" -->
        <div class="result" >
          <div class="header-result">
            <p class="txt-header glow">Os resultados são:</p>
          </div>
          <div class="display-result">
            <p class="txt-display">{{ displayResult() }}</p>
          </div>
          <div v-if="!showAll" class="btns-result">
            <div class="btn-btns prevs" @click="lessIndex">Anterior</div>
            <div class="btn-btns next" @click="addIndex">Proximo</div>
          </div>
        </div>
      <!-- <div v-else >
        <div class="result" v-if="showResult>
          <div class="header-result">
            <p class="txt-header glow">Os resultados são</p>
          </div>
          <div class="display-result">
            <p class="txt-display">{{ displayResult() }}</p>
          </div>
          <div v-if="!showAll" class="btns-result">
            <div class="btn-btns prevs" @click="lessIndex">Anterior</div>
            <div class="btn-btns next" @click="addIndex">Proximo</div>
          </div>
        </div>
      </div> -->
    </div>
</template>
<script>
export default {
  name:'Result',
  data:()=>{
    return{
      result:[],
      regressiveCount:false,
      count:5,
      showAll:false,

      showResult:false,
      showMoreOptions:true,
      start:false,
      index:0
    }
  },
  mounted(){
    let {result, regressiveCount, count, showAll} = this.$cookiz.get('result')
    this.result = result;
    this.regressiveCount = regressiveCount;
    this.count = count;
    this.showAll = showAll;
    if(this.regressiveCount){
      this.start=true
      this.startCountdown()
    }
    this.showResult = true
  },
  methods:{
    
    startCountdown(){
      this.countdownInterval = setInterval(()=>{
        if(this.count >= 1 ) this.count--;
        else{
          clearInterval(this.countdownInterval)
          this.showResult = true
          this.start = false
        }
      },1000)
    },
    beforeDestroy() {
      if(this.countdownInterval){
        clearInterval(this.countdownInterval)
      }
    },
    addIndex(){
      if(this.index < this.result.length - 1){
        this.index++
      }
    },
    lessIndex(){
      if(0 < this.index){
        this.index--
      }
    },
    displayResult(){
      if(this.showAll){
        return this.result.map(x=>x).join(', ')
      }
      return this.result[this.index]
    }
  }
}
</script>
<style scoped>
    /* result */
  .header-result, .display-result,.btns-result{
    margin: 10px auto;
  }
  .toplv-result{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
  }
  .header-result{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:var(--border-white);
    padding: 5px 0;
  }
  .display-result{
    width: 200px;
    height: 100px;
    background-color: var(--color-black);
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border:solid 1px var(--color-white);
  }
  
  .result{
    border-radius: 10px;
    padding: 15px;

    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-btns{
    width: 140px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border:var(--border-white);
    background-color: var(--btn-default);
  }
  .btns-result{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .next:hover, .prevs:hover{
    cursor: pointer;
  }
  .next{
    color:var(--color-white);
  }
  .prevs{
    color:var(--color-white);
  }
  /* end result */
</style>