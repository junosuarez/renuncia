#!/usr/bin/env node

const haRenunciado = false;

module.exports = {
  haRenunciado: haRenunciado
};

if (process.stdin.isTTY) {
  while (!haRenunciado) {
    console.log("¡Ricky renuncia ya!");
  }
  console.log("¡Y llevate la junta!");
}
