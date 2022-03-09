Vue.createApp({
    data() {
        return {
            word: null,
            besked: null,
            besked1: null,
            besked2: null,
            besked3: null,
            besked4: null,
            besked5: null,
        }
    },
    methods: {
        Hello() {
            if (this.word == null || "") {
                this.word = "Nothing Here"
            }
            else {
                this.besked = this.word
                this.besked1 = this.word.toLowerCase()
                this.besked2 = this.word.toUpperCase()
                this.besked3 = this.word.charAt(0).toUpperCase() + this.word.slice(1)
                this.besked4 = this.word.slice(0, -1) + this.word.charAt(this.word.length-1).toUpperCase()
                this.besked5 = this.word.split().reverse().join()
            }
        },
    }
}).mount("#app")