<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <div class="inputs">
        
        <div class="flex">
          <div class="quant-input">
            <label for=qt_sorteio>Sortear</label>
            <input v-model="qt_sorteio" type="number" id="qt_sorteio" name="qt_sorteio" class="input-num especial-num">
            <p>Numeros</p>
          </div>
        </div>


        <div class="range">
          <div class=" range-input">
            <label for=entry_min>De:</label>
            <input v-model="entry_min" type="number" id="entry_min" name="entry_min" class="input-num">
          </div>
          <div class="range-input">
            <label for=entry_max>Até:</label>
            <input v-model="entry_max" type="number" id="entry_max" name="entry_max" class="input-num">
          </div>
        </div>
        
        <div class="flex">
          <div class="btn-show-more" @click="showMoreOptions=!showMoreOptions">
            <p>Mais Opção</p>
          </div>
        </div>

        <div v-if="showMoreOptions" class="more-options">
          <div class="checkbox">
            <label for="maiorMenor">Maior menos</label>
            <input v-model="maiorMenor" id="maiorMenor" name="maiorMenor" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="menorMaior">Menor maior</label>
            <input v-model="menorMaior" id="menorMaior" name="menorMaior" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="noRepetition">Sem repetição</label>
            <input v-model="noRepetition"  id="noRepetition" name="noRepetition" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="showAll">Mostrar todos</label>
            <input v-model="showAll" id="showAll" name="showAll" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="regressiveCount">Contagem regressiva</label>
            <input v-model="regressiveCount" id="regressiveCount" name="regressiveCount" type="checkbox"/>
          </div>
          <div v-if="regressiveCount" class="checkbox">
            <label for="NRegressiveCount"> Contagem regressiva</label>
            <input v-model="NRegressiveCount" type="number" id="NRegressiveCount" name="NRegressiveCount" class="flex input-num" >
          </div>
          
        </div>
        <div class="flex">
          <input type="submit" value="sortear" class="btn-sortear rm-border">
        </div>
      </div>
    </form>

    <div v-if="result.length != 0">
      <div v-if="regressiveCount">
        <div class="regressive-count" v-if="start">
          <p>{{ NRegressiveCount }}</p>
        </div>
        <div class="result" v-if="showResult && !start">
          <p>Os resultados são:</p>
          <div v-if="showAll">
            <p>{{ result.join(', ') }}</p>
          </div>
          <div v-else>
            <div v-for="(item,index) in result" :key="index">
              <p>{{item}}</p>
            </div>
            <div>Proximo</div>
            <div>Anterior</div>
          </div>
        </div>
      </div>  
      <div v-else>
        <div class="result" v-if="showResult">
        <p>Os resultados são:</p>
        
        <div >
          <p>{{ displayResult() }}</p>
        </div>
        <div v-if="!showAll">
          <div @click="addIndex">Proximo</div>
          <div @click="lessIndex">Anterior</div>
        </div>

      
      </div>
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
      showMoreOptions:false,
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
      return this.result.filter((item,index)=>index == this.index && item).join(', ')
    }
  }
}
</script>


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
  .btn-show-more:hover{
    cursor: pointer;
  }
  .quant-input{
    display: flex;
    align-items: center;

  }
  .more-options{
    width: 80%;
    margin: 0 auto;
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
    background-color: rgb(10, 240, 60);
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
    background-color: rgb(8, 128, 165);
    color:white;
    font-weight: bold;
    margin-top: 20px;
  }
  
  .inputs{
    width: 50%;
    margin:0 auto;
    background-color: rgba(27, 11, 49, 0.151);
    border-radius: 20px;
    padding: 20px;
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