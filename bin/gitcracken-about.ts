import * as program from "commander";

import {Logo} from "../src";

program
  .name("gitcracken-about")
  .description("about GitCracken")
  .action(() => {
    Logo.print();
  })
  .parse(process.argv);
