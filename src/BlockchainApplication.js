import Block from "./Block.js";
import Blockchain from "./Blockchain.js";

export default function () {
    let samplesSize = 100;
    let difficulty = 0;

    let blockchain = new Blockchain(difficulty);

    let startTime = performance.now();

    for (let i = 0; i < samplesSize; i++) {
        let block = new Block(i);
        blockchain.addNewBlock(block);
    }

    let endTime = performance.now();

    const executionTime = endTime - startTime;

    console.log(
        `The execution time for ${samplesSize} samples, with difficulty ${difficulty} is: ${
            Math.round(executionTime * 100) / 100
        }`
    );
}
