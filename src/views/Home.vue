<template>
  <div class="ninja-one">
    <h1>Ref: Ninja one</h1>
    <p>My name is {{ninjaOne.name}} and my age is {{ninjaOne.age}}</p>
    <div>
      <input type="text" v-model="ninjaOne.name">
    </div>
    <button @click="updateNinjaOne">Update details</button>
    <button @click="ninjaOne.age++">add 1 to age</button>
  </div>

  <hr style="margin: 80px 0"> 

  <div class="ninja-one">
    <h1>Ref: Ninja two</h1>
    <p>My name is {{ninjaTwo.name}} and my age is {{ninjaTwo.age}}</p>
    <div>
      <input type="text" v-model="ninjaTwo.name">
    </div>
    <button @click="updateNinjaTwo">Update details</button>
    <button @click="ninjaTwo.age++">add 1 to age</button>
  </div>

  <hr style="margin: 80px 0"> 

  <div class="ninja-one">
    <h1>Loop through all names</h1>
    <input type="text" v-model="search">
    <p>Search Term -- {{search}}</p>
    <ul>
      <li v-for="(name, index) in filterNames" :key="index">{{name}}</li>
    </ul>
  </div>

  <hr style="margin: 80px 0"> 
  <button @click="handleClick">Stop watch effect</button>


</template>

<script>
import { reactive, ref, computed, watch, watchEffect } from 'vue'
export default {
  name: 'Home',
  // runs before the component is mounted or created
  setup() {

    // using ref to create a reactive variable
    const ninjaOne = ref({
      name: 'Tunmise',
      age: 25
    })

    // using reactive to create a reactive variable
    // primitive types cannot be used with reactive
   const ninjaTwo = reactive({
      name: 'Luigi',
      age: 35
    })


    const names =  ref(['Tunmise', 'Luigi', 'Yoshi', 'Mario', 'Bowser', 'Peach', 'Toad'])
    const search = ref('')


    // does not run initially
    const stopWatch = watch(search, () => {
      console.log('search changed')
    })

    // runs when the setup runs, generally used for fetching data from the db
    const stopEffect = watchEffect(() => {
      console.log('watch effect ram', search.value)
    })
  
    const updateNinjaOne = () => {
      ninjaOne.value.name = 'Wilson'
      ninjaOne.value.age = 26
    }
  
    const updateNinjaTwo = () => {
      ninjaTwo.name = 'Omolayo'
      ninjaTwo.age = 24
    }

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }
    

    const filterNames = computed(() => {
      return names.value.filter(name => name.toLowerCase().includes(search.value.toLowerCase()))
    })

    return {
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,
      filterNames,
      handleClick,
      search,
      names
    }
  }
}
</script>
