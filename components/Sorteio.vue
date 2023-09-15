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
            <input v-model="showAll" disabled id="showAll" name="showAll" type="checkbox"/>
          </div>
          <div class="checkbox">
            <label for="regressiveCount" class="glow">Contagem regressiva</label>
            <input v-model="regressiveCount" disabled id="regressiveCount" name="regressiveCount" type="checkbox"/>
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
    
  </div>
</template>

<script>
import randomNumber from '../utils/randomNumber'
export default {
  name: 'Sorteio',
  data:()=>{
    return{
      qt_sorteio:1,
      entry_min:0,
      entry_max:100,
      maiorMenor:false, 
      menorMaior:false,
      noRepetition:true,
      showMoreOptions:true,


      regressiveCount:false,
      NRegressiveCount:5,
      showAll:false
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
      let sendRes = {
        result:randomNumber(data), 
        regressiveCount:this.regressiveCount,
        count:this.NRegressiveCount,
        showAll:this.showAll
      }
      this.$cookiz.set('result',sendRes)
      this.$router.push({name:'result'})
    },
    
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
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
  }
  .more-options{
    width: 80%;
    margin: 0 auto;
    border:solid 1px var(--color-white);
    padding: 5px;
    border-radius: 5px;
    background-color: var(--color-black);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 75%;
    align-items: center;
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
    background-color: var(--btn-default);
    border:solid 1px var(--color-white);
    color:var(--color-white);
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
  .btn-sortear{
    height: 30px;
    width: 100px;
    color:white;
    font-weight: bold;
    margin-top: 20px;
    border:var(--border-white);
    border-radius: 5px;
    background-color: var(--btn-default);
  }
  
  .inputs{
    width: 40%;
    margin:0 auto;
    border-radius: 20px;
    padding: 20px;
    border:var(--border-white);
    background-color: #161616;
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