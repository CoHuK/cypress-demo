
import { Placeholders } from "../typings/placeholders"
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * 
             * @param input placeholder text value
             * @example
             * // this command
             * cy.getByPlaceholder('Your email')
             * // will select this element
             * // <input placeholder="Your email" />
             */
            getByPlaceholder(input: Placeholders): Chainable<any>
        }
    }
}

Cypress.Commands.add('getByPlaceholder', (input: Placeholders) => {
    Cypress.log({
        "displayName": "getByPlaceholder",
        "message": input,
        consoleProps() {
            return {
                selector: input
            }
        }

    })
    return cy.get(`[placeholder="${input}"]`, {log: false})
})