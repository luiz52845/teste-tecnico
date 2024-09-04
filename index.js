const express = require('express')
const app = express();
const port = 3000;

//questao 1
app.get('/fibonacci/:number', (req, res) => {
    const num = parseInt(req.params.number);
    let a = 0, b = 1, next = 0;
    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }
    const isFib = (next === num || num === 0 || num === 1);
    res.json({ number: num, isFibonacci: isFib });
});

//questao 2
app.get('/countA/:string', (req, res) => {
    const str = req.params.string;
    let count = 0;
    for (let char of str) {
        if (char.toLowerCase() === 'a') {
            count++;
        }
    }
    res.json({ string: str, countA: count });
});

//questao 3
app.get('/calculateSum', (req, res) => {
    let INDICE = 12, SOMA = 0, K = 1;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    res.json({ sum: SOMA });
});

/*
questao 4

    a) 1, 3, 5, 7, ___ -> Próximo: 9(sequência ímpar)
    b) 2, 4, 8, 16, 32, 64, ____ -> Próximo: 128(potências de 2)
    c) 0, 1, 4, 9, 16, 25, 36, ____ -> Próximo: 49(quadrados perfeitos)
    d) 4, 16, 36, 64, ____ -> Próximo: 100(quadrados perfeitos de números pares)
    e) 1, 1, 2, 3, 5, 8, ____ -> Próximo: 13(sequência de Fibonacci)
    f) 2, 10, 12, 16, 17, 18, 19, ____ -> Próximo: 200(valor provável, mas não totalmente claro)

questao 5

    Primeira ida à sala das lâmpadas:
    Ligo dois interruptores simultaneamente(vamos chamar de A e B).
    Deixo esses interruptores ligados por alguns minutos.
    Desligo o interruptor A e deixo o interruptor B ligado.
    Agora, vou até a sala das lâmpadas.

    Na sala das lâmpadas:
    Se uma lâmpada está acesa, ela está conectada ao interruptor B(que ainda está ligado).
    Se uma lâmpada está apagada, mas quente, ela está conectada ao interruptor A(que eu desliguei antes de entrar na sala).
    A lâmpada que está apagada e fria está conectada ao interruptor C(que eu nunca liguei).

*/


app.listen(port, () => {
    console.log(`server started on port ${port}`);
})