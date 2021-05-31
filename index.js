function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const m = [...s]
    let c = ''

     m.forEach(x => vowels.includes(x) ? console.log(x) : c += x + '\n')

     console.log(c.trim())
}

vowelsAndConsonants('javascriptloops')