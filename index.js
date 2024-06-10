#!/usr/bin/env node

import { program } from "commander"

program
  .version("1.0.0")
  .description("My Node CLI")
  .options(
    {
      name: "Add your name",
      last: "Add your last name",
    }
    // "-ln, -last-name": "add your last name",
  )
  .action((options) => {
    console.log(`Hey, ${program.name + program.last}}!`)
  })

program.parse(process.argv)
