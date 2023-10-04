describe('Página de Carrinho', () => {
    it('Selecionar os itens e gerar orcamento', () => {
      cy.visit('http://127.0.0.1:5500/frontend/carrinho/')
      cy.get('[type="checkbox"]').check();
      cy.wait(2000);
      cy.contains('a', 'Gerar Orçamento').click();
      cy.wait(2000);

    
    })
  })