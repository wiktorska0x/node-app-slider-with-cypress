describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if each slide description is displayed correctly', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-slide').each(($slide, index) => {
      const title = $slide.find('h1').text().trim();
      const description = $slide.find('p').text().trim();

      cy.wrap(title).should('not.be.empty');
      cy.wrap(description).should('not.be.empty');

      switch(index) {
        case 0:
          cy.wrap(title).should('eq', 'Rome');
          cy.wrap(description).should('eq', 'Italy');
          break;
        case 1:
          cy.wrap(title).should('eq', 'London');
          cy.wrap(description).should('eq', 'United Kingdom');
          break;
        case 2:
          cy.wrap(title).should('eq', 'Paris');
          cy.wrap(description).should('eq', 'France');
          break;
      }
    });
  });
});

