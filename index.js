#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 2,
  width: 60,
  title: "Ali Almasi",
  titleAlignment: "center",
  borderStyle: "round",
  borderColor: "#fff",
  float: "center",
  margin: 3
};

const intro = chalk.bold(
  "Hey there! My name is Ali. I'm a web developer, currently living in Tehran. I'm also intersted in software development.\n\nFind me on the Internet.\n\n",
);

const links = [
  { name: chalk.black.bgWhite("My webpage"), space: "  ", url: ("https://") + chalk.bold("al1almasi.ir") },
  { name: chalk.magenta.bgBlack("GitHub"), space: "      ", url: ("https://") + chalk.bold("github.al1almasi.ir") },
  { name: chalk.white.bgBlue("LinkedIn"), space: "    ", url: ("https://") + chalk.bold("linkedin.al1almasi.ir") },
  { name: chalk.white.bgMagenta("Mastodon"), space: "    ", url: ("https://") + chalk.bold("mastodon.al1almasi.ir") },
  { name: chalk.blue.bgBlack("My notebook"), space: " ", url: ("https://") + chalk.bold("note.al1almasi.ir") },
  { name: chalk.white.bgBlack("My blog"), space: "     ", url: ("https://") + chalk.bold("blog.al1almasi.ir") }
];

const linkList = links.map((link) => `${link.name} ${link.space} ${link.url}`).join("\n");

console.log("\n" + boxen(intro + linkList, boxenOptions) + "\n");
