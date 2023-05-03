/// <reference types="cypress" />

import Counter from "../../src/Counter";

const counterSelector = '[data-cy="counter"]';
const incrementSelector = "[aria-label=increment]";
const decrementSelector = "[aria-label=decrement]";

const checkColor = () =>
  cy
    .get(decrementSelector)
    .should("have.css", "color")
    .and("eq", "rgb(0, 0, 0)");

const checkBackgroundColor = () =>
  cy
    .get(decrementSelector)
    .should("have.css", "background-color")
    .and("eq", "rgb(0, 128, 0)");

describe("<Counter>", () => {
  it("should mount the counter component", () => {
    cy.mount(<Counter></Counter>);
  });

  it("should increment the counter in 1", () => {
    cy.mount(<Counter></Counter>);
    cy.get(incrementSelector).click();
    cy.get(counterSelector).should("have.text", "1");
    checkColor();
    checkBackgroundColor();
  });

  it("should increment the counter in 2", () => {
    cy.mount(<Counter></Counter>);
    cy.get(incrementSelector).click();
    cy.get(incrementSelector).click();
    cy.get(counterSelector).should("contain.text", 2);
    checkColor();
    checkBackgroundColor();
  });

  it("should increment the counter in 2 and then decrease in 1 ", () => {
    cy.mount(<Counter></Counter>);
    cy.get(incrementSelector).click();
    cy.get(incrementSelector).click();
    cy.get(counterSelector).should("contain.text", 2);
    cy.get(decrementSelector).click();
    cy.get(counterSelector).should("have.text", "1");
    checkColor();
    checkBackgroundColor();
  });

  it("should decrement the counter in -1 and check that the number is negative", () => {
    cy.mount(<Counter></Counter>);
    cy.get(decrementSelector).click();
    cy.get(counterSelector).should("have.text", "-1");
    checkColor();
    checkBackgroundColor();
  });

  it("should decrement the counter in -2 and check that the number is negative", () => {
    cy.mount(<Counter></Counter>);
    cy.get(decrementSelector).click();
    cy.get(decrementSelector).click();
    cy.get(counterSelector).should("have.text", "-2");
    checkColor();
    checkBackgroundColor();
  });
});
