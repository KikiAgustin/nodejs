// file system

const fs = require('fs');

// try {
//     fs.writeFileSync('data/test.txt', "Hello from dunia");
// } catch (error) {
//     console.log(error);
// }

// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan Nama anda : ', (nama) => {
    rl.question('Masukan no Hp anda : ', (noHP) => {
        const contact = { nama, noHP };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('terimakasih');

        rl.close();
    });
});