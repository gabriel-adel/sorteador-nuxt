<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <div class="inputs">
        
        <div class="flex">
          <div class="quant-input">
            <label for=qt_sorteio class="glow">Sortear Numeros</label>
            <input v-model="qt_sorteio" type="number" autofocus id="qt_sorteio" name="qt_sorteio" class="input-num especial-num">
          </div>
        </div>


        <div class="range">
          <div class=" range-input">
            <label for=entry_min class="glow">De:</label>
            <input v-model="entry_min" type="number" id="entry_min" name="entry_min" class="input-num">
          </div>
          <div class="range-input">
            <label for=entry_max class="glow">Até:</label>
            <input v-model="entry_max" type="number" id="entry_max" name="entry_max" class="input-num">
          </div>
        </div>
        
        <div class="flex">
          <div class="btn-show-more" @click="showMoreOptions=!showMoreOptions">
            <p class="">Mais Opção</p>
          </div>
        </div>

        <div v-if="showMoreOptions" class="more-options">
          <div class="checkbox">
            <label for="maiorMenor" class="glow">Maior menos</label>
            <input v-model="maiorMenor" id="maiorMenor" name="maiorMenor" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="menorMaior" class="glow">Menor maior</label>
            <input v-model="menorMaior" id="menorMaior" name="menorMaior" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="noRepetition" class="glow">Sem repetição</label>
            <input v-model="noRepetition"  id="noRepetition" name="noRepetition" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="showAll" class="glow">Mostrar todos</label>
            <input v-model="showAll" id="showAll" name="showAll" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="regressiveCount" class="glow">Contagem regressiva</label>
            <input v-model="regressiveCount" id="regressiveCount" name="regressiveCount" type="checkbox"/>
          </div>
          <div v-if="regressiveCount" class="checkbox">
            <label for="NRegressiveCount" class="glow"> Contagem regressiva</label>
            <input v-model="NRegressiveCount" type="number" id="NRegressiveCount" name="NRegressiveCount" class="flex input-num" >
          </div>
        </div>
        <div class="flex">
          <input type="submit" value="sortear" class="btn-sortear" >
        </div>
      </div>
    </form>
<!-- v-if="result.length != 0" -->
    <div class='toplv-result'>
      <div v-if="regressiveCount">
        <div class="regressive-count" v-if="start">
          <p class="glow">{{ NRegressiveCount }}</p>
        </div>
        
        <div class="result" v-if="showResult && !start">
          <div class="header-result">
            <p class="txt-header glow">Os resultados são:</p>
          </div>
          <div class="display-result">
            <p class="txt-display">{{ displayResult() }}</p>
          </div>
          <div v-if="!showAll" class="btns-result">
            <div class="btn next" @click="addIndex">Proximo</div>
            <div class="btn prevs" @click="lessIndex">Anterior</div>
          </div>
        </div>
      </div>  
      <div >
        <!-- v-else  v-if="showResult"-->
        <div class="result" >
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
      </div>
    </div>
  </div>
</template>

<style scoped>
  
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type=number]{
    -moz-appearance:textfield;
    appearance: textfield;
  }
  input[type=number]:focus{
    outline: none;
  }

  /* result */
  .header-result, .display-result,.btns-result{
    margin: 10px auto;
  }
  .toplv-result{
    width: 50%;
    margin: 50px auto;
  }
  .header-result{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .display-result{
    width: 200px;
    height: 100px;
    background-color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
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
    color:white;
  }
  .prevs{
    color:white;
  }
  /* end result */


  .btn-show-more:hover{
    cursor: pointer;
  }
  .quant-input{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
  }
  .more-options{
    width: 80%;
    margin: 0 auto;
    border:solid 1px white;
    padding: 5px;
    border-radius: 5px;
  }
  .especial-num{
    margin: 0 20px;
  }
  .range-input{
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .btn-show-more{
    border:solid 1px white;
    color:white;
    font-weight: bold;
    font-size: 20px;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    margin: 15px 0;
    width: 100%;
    max-width: 250px;
  }
  .rm-border{
    border: none;
  }
  .btn-sortear{
    height: 30px;
    width: 100px;
    /* color:white; */
    font-weight: bold;
    margin-top: 20px;
    border:var(--border-white);
    border-radius: 5px;
    /* background-color: var(--btn-default); */
  }
  
  .inputs{
    width: 50%;
    margin:0 auto;
    border-radius: 20px;
    padding: 20px;
    border:var(--border-white)
  }
  .checkbox{
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .input-num{
    width: 50px;
    height: 50px;
    font-size: 25px;
    text-align: center;
  }
  .range{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15px 0;
  }
  .form{
    padding: 15px;
  }
  .flex{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
import randomNumber from '../utils/randomNumber'
export default {
  name: 'Sorteio',
  data:()=>{
    return{
      result:[],
      qt_sorteio:1,
      entry_min:0,
      entry_max:100,
      showMoreOptions:false,
      maiorMenor:false, 
      menorMaior:false,
      noRepetition:true,
      regressiveCount:false,
      NRegressiveCount:5,
      showResult:false,
      showMoreOptions:true,
      start:false,
      showAll:false,
      index:0
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
      return this.result.filter((item,index)=>index == this.index && item).join('')
    }
  }
}
</script>

