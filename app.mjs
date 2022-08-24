// this is the main app module

////global module
import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

//custom module / local
import {data_week} from './data.mjs'

const io = readline.createInterface({input, output})

io.question('Choose the day (1..7 or day name): ', (day_number) => {
  // console.log( day_number, typeof day_number)
  data_week.forEach( (day, index) => {
  // console.log(`${day.name} [${day.date}]: ${day.temp}`)

  // HW1: what if the user inputs the day name --->  Monday , Tuesday ...
  // hint1: use the data type check
  if (day_number === `${day.name}`) {
    console.log(`[${day.date}]: ${day.temp}`)
  } 

  // HW2: what if the user inputs a range ---> 1..3, or  'Monday'..'Tuesday'
  // hint2: use String processing


  //find algorithm
  // data_week.forEach( (day, index) => {
    if (index + 1 == +day_number) {
      console.log(`[${day.date}]: ${day.temp}`)
    }
  })

  io.close()
})

// interaction