#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";

const boxenOptions = {
  padding: 2,
  width: 60,
  title: "Ali Almasi",
  titleAlignment: "center",
  borderStyle: "round",
  borderColor: "#2188ff",
  margin: 3
};

const intro = chalk.bold(
  "Hey there! My name is Ali. I'm a web developer, currently living in Tehran. I'm also intersted in software development.\n\nFind me on the Internet.\n\n",
);

const links = [
  { name: chalk.black.bgWhite("My webpage"), space: "  ", url: chalk.dim("https://") + chalk.bold("al1almasi.ir") },
  { name: chalk.magenta.bgBlack("GitHub"), space: "      ", url: chalk.dim("https://") + chalk.bold("github.al1almasi.ir") },
  { name: chalk.white.bgBlue("LinkedIn"), space: "    ", url: chalk.dim("https://") + chalk.bold("linkedin.al1almasi.ir") },
  { name: chalk.white.bgMagenta("Mastodon"), space: "    ", url: chalk.dim("https://") + chalk.bold("mastodon.al1almasi.ir") },
  { name: chalk.blue.bgBlack("My notebook"), space: " ", url: chalk.dim("https://") + chalk.bold("note.al1almasi.ir") },
  { name: chalk.white.bgBlack("My blog"), space: "     ", url: chalk.dim("https://") + chalk.bold("blog.al1almasi.ir") }
];

const linkList = links.map((link) => `${link.name} ${link.space} ${link.url}`).join("\n");

clear();
console.log("\n" + boxen(intro + linkList, boxenOptions) + "\n");
