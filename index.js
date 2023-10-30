#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 65,
  title: "Ali Almasi",
  titleAlignment: "center",
  borderStyle: "round",
  borderColor: "#6ce988",
};

const intro = chalk.bold(
  "Hey there! My name is Ali. I'm a web developer, currently living in Tehran. I'm also intersted in software development.\n\nFind me on the Internet.\n\n",
);

const links = [
  { name: ("GitHub"), space: "      ", url: ("https://github.com/") + chalk.bold("alialmasi") },
  { name: ("LinkedIn"), space: "    ", url: ("https://linkedin.com/in/") + chalk.bold("alialmasi") },
  { name: ("My webpage"), space: "  ", url: ("https://") + chalk.bold("al1almasi.ir") },
  { name: ("My notebook"), space: " ", url: ("https://") + chalk.bold("note.al1almasi.ir") }
];

const linkList = links.map((link) => `${link.name} ${link.space} ${link.url}`).join("\n");

console.log("\n" + boxen(intro + linkList, boxenOptions) + "\n");