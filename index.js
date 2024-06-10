#!/usr/bin/env node

import { program } from "commander"

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-n, --name <type>", "Add your name")
  .option("-a, --age <number>", "Add your age")
  .option("-e, --email <string>", "Add your email")
  .action((options) => {
    console.log(`Hey, ${options.name + options.email + options.age}!`)
  })

program.parse(process.argv)
