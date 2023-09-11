<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <div class="inputs">
        
        <div class="input-text">
          <label for=qt_sorteio>Quantidade de numeros para sorteio</label>
          <input v-model="qt_sorteio" id="qt_sorteio" name="qt_sorteio" class="input">
        </div>

        <div>
          <div class="input-text">
            <label for=entry_min>De</label>
            <input v-model="entry_min" id="entry_min" name="entry_min" class="input">
          </div>
          <div class="input-text">
            <label for=entry_max>A</label>
            <input v-model="entry_max" id="entry_max" name="entry_max" class="input">
          </div>
        </div>
        
        <div class="">
          <div class="" @click="showMoreOptions=!showMoreOptions">
            <p>Mais Opção</p>
          </div>
        </div>

        <div v-if="showMoreOptions" class="">
          <div class="input-checkbox">
            <label for="maiorMenor">Maior menos</label>
            <input v-model="maiorMenor" id="maiorMenor" name="maiorMenor" type="checkbox"/>
          </div>
          <div class="input-checkbox">
            <label for="menorMaior">Menor maior</label>
            <input v-model="menorMaior" id="menorMaior" name="menorMaior" type="checkbox"/>
          </div>
          <div class="input-checkbox">
            <label for="noRepetition">Sem repetição</label>
            <input v-model="noRepetition"  id="noRepetition" name="noRepetition" type="checkbox"/>
          </div>

          <div class="input-checkbox">
            <label for="regressiveCount">Contagem regressiva</label>
            <input v-model="regressiveCount" id="regressiveCount" name="regressiveCount" type="checkbox"/>
          </div>
          <div v-if="regressiveCount" class="input-text">
            <label for="NRegressiveCount"> Contagem regressiva</label>
            <input v-model="NRegressiveCount" id="NRegressiveCount" name="NRegressiveCount" class="input" >
          </div>

        </div>
      </div>
      <div>
        <input type="submit" value="sortear" class="btn-sortear">
      </div>
    </form>

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

  </div>
</template>

<script>
import randomNumber from '../utils/randomNumber'
export default {
  name: 'Sorteio',
  data:()=>{
    return{
      result:[],
      qt_sorteio:66,
      entry_min:0,
      entry_max:100,
      showMoreOptions:false,
      maiorMenor:false, 
      menorMaior:false,
      noRepetition:true,
      regressiveCount:false,
      NRegressiveCount:5,
      showResult:false,
      showMoreOptions:false,
      start:false,
    }
  },
  methods:{
    submit(){
      this.result = []
      let data = {
        min:this.entry_min,
        max:this.entry_max,
        n:this.qt_sorteio,
        menorMaior:this.menorMaior,
        maiorMenor:this.maiorMenor,
        noRepetition:this.noRepetition
      }
      this.result = randomNumber(data)
      if(this.regressiveCount){
        this.start=true
        this.startCountdown()
      }
      this.showResult = true
    },
    startCountdown(){
      this.countdownInterval = setInterval(()=>{
        if(this.NRegressiveCount >= 1 ) this.NRegressiveCount--;
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
  }
}
</script>
