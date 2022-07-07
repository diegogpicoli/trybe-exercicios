const uppercase = require("./exercicio1")


it('Testando uppercase', (done) => {
    uppercase('ola', (str) =>{
        try {
            expect(str).toBe('OLA');
            done()
        } catch (error) {
            done(error)
        }
    })

})