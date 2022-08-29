// this is the main app module

// global module
import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

// custom module / local
import {data_week} from './data.mjs'

const io = readline.createInterface({input, output})

io.question('Choose the day (1..7 or day name): ', (day_number) => {
  // console.log( day_number, typeof day_number)

  //find algorithm
  data_week.forEach( (day, index) => {
  // console.log(`${day.name} [${day.date}]: ${day.temp}`)

    // HW1: what if the user inputs the day name --->  Monday , Tuesday ...
    // hint1: use the data type check
    if (day_number === `${day.name}`) {
      console.log(`[${day.date}]: ${day.temp}`)
    } 

    // HW2: what if the user inputs a range ---> 1..3, or  'Monday'..'Tuesday'
    // hint2: use String processing

    // Mo..Su
    let interval = day_number.split('..')
    
    let extractStart = interval[0]
    let extractEnd = interval[1]

    let index1 = data_week.findIndex(day => day.name == extractStart)
    // console.log(index1)
    let index2 = data_week.findIndex(day => day.name == extractEnd)
    // console.log(index2)

    if (index >= index1 && index <= index2) {
      console.log(`[${day.date}]: ${day.temp}`)
    }

    // 1..7
    let indexInterval = day_number.split('..')
    
    let indexStart = indexInterval[0]
    let indexEnd = indexInterval[1]

    if (index + 1 >= indexStart && index + 1 <= indexEnd) {
      console.log(`[${day.date}]: ${day.temp}`)
    }

  
    // the user inputs the day number
    if (index + 1 == +day_number) {
      console.log(`[${day.date}]: ${day.temp}`)
    }
    
  })

  io.close()
})

// interaction
