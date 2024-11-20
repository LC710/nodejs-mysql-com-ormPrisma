import { clientes, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function connect(){
    await prisma.$connect();

    // console.log("Connected !");

}

// console.log("Connecting...");
connect();

export function getClientes(){
    return prisma.clientes.findMany();
}

export function getCliente(id: number){
    return prisma.clientes.findUnique({
        where: { id }
    });
}

type Cliente = { // Criando o "type" em vez de usar o do "prisma", tem que está igual com está no "banco de dados"
    nome: string;
    idade: number;
    uf: string;
}

// export function addCliente(newCustomer : clientes){ // O prisma tem o tipo, com prisma generate ele consegue esse tipos; Mas se não quiser usar esse podemos criar os "type"; 
export function addCliente(newCustomer : Cliente){ // Usando o "type" que criamos em vez de usar o do "prisma";
    return prisma.clientes.create({
        data: newCustomer
    });
}

export function updateCliente(id: number, newData : Cliente){ // Usando o "type" que criamos em vez de usar o do "prisma";
    return prisma.clientes.update({
        where: { id },
        data: newData
    });
}

export function deleteCliente(id: number){ // Usando o "type" que criamos em vez de usar o do "prisma";
    return prisma.clientes.delete({
        where: { id }
    });
}

