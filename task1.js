var converter = {
    sentence: '',
    setSentence: function(newSentence){
        this.sentence = newSentence
    },
    getSentence: function(){
        return this.sentence
    },
    convert: function(newSentence){
        let correct = newSentence[0].toUpperCase();
        for(let i=1; i<newSentence.length; i++){
            correct += newSentence[i]
        }
        let l = newSentence.length;
        if(correct.charAt(l-1) != '.'){
            correct += '.'
        }
        console.log(correct)
    }
}
converter.setSentence('hello, user')
converter.convert(converter.sentence)