/*Crie um projeto Node no GitHub chamado tdd-exercicio
- Usando Node.js e o Jest, implemente usando TDD o problema descrito em "4-Problema-TDD Arquivo".
- Crie um repositório e faça um commit a cada passo do TDD: (1) teste falhando, (2) teste passando, e (3) refatorando.
- Em algum momento, use o pacote 'jest-matcher-deep-close-to ' para checar objetos que retornam floats.
- Estude e use o pacote 'validate' para validar objetos. */
class Gerador {
    
    montarPropostas(cliente){
        if(cliente.salario <= 1000) {
            return[
                this.gerarProposta(2,2,cliente.valorDoEmprestimo),
                this.gerarProposta(3,2,cliente.valorDoEmprestimo),
            ]; 
        } 
        
        if(cliente.salario >= 5000) {
            return[

                this.gerarProposta(2,1.1,cliente.valorDoEmprestimo),
                this.gerarProposta(4,1.3,cliente.valorDoEmprestimo),
                this.gerarProposta(10,1.3,cliente.valorDoEmprestimo),
                this.gerarProposta(20,1.4,cliente.valorDoEmprestimo)
                
            ]; 

        }    

        return[
            this.gerarProposta(2,1.3,cliente.valorDoEmprestimo),
            this.gerarProposta(4,1.5,cliente.valorDoEmprestimo),
            this.gerarProposta(10,1.5,cliente.valorDoEmprestimo)
        ];    
    }

    gerarProposta(pParcelas, fator, valorDoEmprestimo){
        return {
            parcelas: pParcelas,
            total:fator  * valorDoEmprestimo,
            valorDaParcela: fator * valorDoEmprestimo / pParcelas  
        }
    }



}

module.exports = Gerador;