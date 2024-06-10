#!/usr/bin/env node

import { program } from "commander"
import inquirer from "inquirer"

program
  .version("1.0.0")
  .description("My Node CLI")
  .action(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What's your name?",
        },
      ])
      .then((answers) => {
        console.log(`Hey, ${answers.name + answers.email + answers.age}!`)
      })
  })
  .parse(process.argv)
