// import clientesRepository from "./clientesRepository"
import { getClientes, getCliente, addCliente, updateCliente, deleteCliente } from "./clientesRepository"

// console.log("Teste")

async function start() { // CLIENTS
    const clientes = await getClientes();
    console.log("CLIENTS: ")
    console.log(clientes);
    console.log("=============================== ");
    
}

async function start2() { // CLIENT
    const id = 1;
    const cliente = await getCliente(id);
    console.log(cliente);
}

async function start3() { // CREATE
    const newClient = {
        nome: "Teste",
        idade: 20,
        uf: "SP"
    };
    
    const cliente = await addCliente(newClient);
    console.log("CRIANDO: ");
    console.log(cliente);
    console.log("=============================== ");
    
    
}

async function start4() { // UPDATE
    
    let arr:any = await getClientes(); // CLIENTS
    const ultimoId = await arr[arr.length - 1].id;
    // const ultimoId = arr.at(-1).id; // Outra Forma de Fazer
    console.log("UPDATE no Ultimo ID: " + ultimoId);
    console.log("=============================== ");
    
    
    const updateClient = {
        nome: "Teste Alt",
        idade: 22,
        uf: "SP"
    };

    const cliente = await updateCliente(ultimoId, updateClient);
    console.log(cliente);
}

async function start5() { // DELETE
    let arr:any = await getClientes(); // CLIENTS
    const ultimoId = arr[arr.length - 1].id;
    // const ultimoId = arr.at(-1).id; // Outra Forma de Fazer


    const cliente = await deleteCliente(ultimoId);
    console.log("DELETANDO ultimo ID: " + ultimoId);
    console.log(cliente);
}


// start3(); // CREATE

// start4(); // UPDATE
// start(); // CLIENTS
// start2(); // CLIENT
// start5(); // DELETE
// start(); // CLIENTS

async function executarNaOrdem() {
//   await start(); // CLIENTS
//   //   await start2(); // CLIENT
//   await start3(); // CREATE
//   await start(); // CLIENTS
//   await start4(); // UPDATE
//   await start(); // CLIENTS
//   await start5(); // DELETE

//   await start(); // CLIENTS

  // OU
  let arrayFuncoes = [start, start2, start3, start4, start5, start]

  for (let fuc of arrayFuncoes){
      await fuc();
  }
}

executarNaOrdem();

// Comandos

// npm install -D typescript ts-node prisma
// npx tsc --init
// ts-node index"
//  npx prisma init
// npx prisma db pull  // Pra puxar do banco de dados (pra montar os model do arquivo "schema.prisma") do "db", se quisesse começar pelo "schema" usaria o "push" assim "npx prisma db push" (Vc digitaria as models e ele criaria as tabelas no banco de dados);