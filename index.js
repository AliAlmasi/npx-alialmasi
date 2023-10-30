#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 2,
  width: 65,
  title: "Ali Almasi",
  titleAlignment: "left",
  borderStyle: "round",
  borderColor: "#6ce988",
};

const intro = chalk.bold(
  "Hey there! My name is Ali. I'm a web developer, currently living in Tehran. I'm also intersted in software development.\n\nFind me on the Internet.\n\n",
);

const links = [
  { name: ("GitHub"), space: "      ", url: ("https://github.com/") + chalk.bold("alialmasi") },  { name: ("LinkedIn"), space: "    ", url: ("https://linkedin.com/in/") + chalk.bold("alialmasi") },
  { name: ("Telegram"), space: "    ", url: ("https://t.me/") + chalk.bold("al1almasi") },  { name: ("X"), space: "           ", url: ("https://x.com/") + chalk.bold("a710almasi") },
  { name: ("Medium"), space: "      ", url: ("https://medium.com/") + chalk.bold("@a710almasi") },
  { name: ("dev.to"), space: "      ", url: ("https://dev.to/") + chalk.bold("alialmasi") },  { name: ("Blog"), space: "        ", url: ("https://") + chalk.bold("note.al1almasi.ir") },  { name: ("Instagram"), space: "   ", url: ("https://instagram.com/") + chalk.bold("al1almasi") }
];

const linkList = links.map((link) => `${link.name} ${link.space} ${link.url}`).join("\n");

console.log("\n" + boxen(intro + linkList, boxenOptions) + "\n");