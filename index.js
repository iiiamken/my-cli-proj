#!/usr/bin/env node

import { program } from "commander"
// import { Command } from "commander"
import inquirer from "inquirer"
// program = new Command()

export const nameQuestion = program
  .command("name")
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
        console.log(`Hey, ${answers.name}!`)
      })
  })
  .parse(process.argv)
