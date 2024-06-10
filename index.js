#!/usr/bin/env node

import { program } from "commander"
import inquirer from "inquirer"

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-n, --name [name]", "Your name")
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
