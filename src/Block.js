class Block {
    constructor(data, previusHash = "") {
        (this.data = data), (this.previusHash = previusHash);
        this.hash = this.generateHash();
        this.id = Date.now().toString(36) + Math.random().toString(36);
        this.nonce = 0;
    }

    generateHash() {
        let block =
            this.id + JSON.stringify(this.data) + this.previusHash + this.nonce;

        return CryptoJS.SHA256(block).toString();
    }

    mine(dif) {
        while (this.hash.substring(0, dif) !== Array(dif + 1).join("0")) {
            this.nonce++;
            this.hash = this.generateHash();
        }
    }
}

export default Block;
