/// <reference types="cypress" />

import Counter from "../../src/Counter";

const counterSelector = '[data-cy="counter"]';
const incrementSelector = "[aria-label=increment]";
const decrementSelector = "[aria-label=decrement]";

describe("<Counter>", () => {
  it("should mount the counter component", () => {
    cy.mount(<Counter></Counter>);
  });

  it("should increment the counter in 1", () => {
    cy.mount(<Counter></Counter>);
    cy.get(incrementSelector).click();
    cy.get(counterSelector).should("have.text", "1");
    cy.get(decrementSelector)
      .should("have.css", "color")
      .and("eq", "rgb(0, 0, 0)");
  });

  it("should increment the counter twice ", () => {
    cy.mount(<Counter></Counter>);
    cy.get(incrementSelector).click();
    cy.get(incrementSelector).click();
    cy.get(counterSelector).should("contain.text", 2);

    //Do the decrement
    cy.get(decrementSelector).click();

    // Assert
    cy.get(counterSelector).should("have.text", "1");

    // Assert color
    cy.get(decrementSelector)
      .should("have.css", "color")
      .and("eq", "rgb(0, 0, 0)");
    // Assert background color
    cy.get(decrementSelector)
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 128, 0)");
  });
  it("Two Time decrement then Increment the count ", () => {
    cy.mount(<Counter></Counter>);

    //Two time decrement the count
    cy.get(decrementSelector).click();
    cy.get(decrementSelector).click();
    // Assert
    cy.get(counterSelector).should("have.text", "-2");

    //Then increment the count
    cy.get(incrementSelector).click();

    cy.get(counterSelector).should("have.text", "-1");
    // Assert color
    cy.get(decrementSelector)
      .should("have.css", "color")
      .and("eq", "rgb(0, 0, 0)");
    // Assert background color
    cy.get(decrementSelector)
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 128, 0)");
  });
});
