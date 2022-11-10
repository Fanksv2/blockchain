import Block from "./Block.js";

class Blockchain {
    constructor(difficulty) {
        this.chain = [this.createFirstBlock()];
        this.difficulty = difficulty;
    }

    createFirstBlock() {
        return new Block(5, "0");
    }

    addNewBlock(block) {
        let previousBlock = this.chain[this.chain.length - 1];
        block.previusHash = previousBlock.hash;
        block.mine(this.difficulty);

        this.chain.push(block);
    }

    printChain() {
        this.chain.forEach((block) => {
            console.table(block);
        });
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const block = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (block.hash !== block.generateHash()) {
                return false;
            }

            if (block.previusHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

export default Blockchain;
