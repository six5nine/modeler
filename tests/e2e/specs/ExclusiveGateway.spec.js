import {
  dragFromSourceToDest,
  getElementAtPosition,
  getLinksConnectedToElement,
  typeIntoTextInput,
  connectNodesWithFlow,
} from '../support/utils';
import { nodeTypes } from '../support/constants';

describe('Exclusive Gateway', () => {
  beforeEach(() => {
    cy.loadModeler();
  });

  it('Update exclusive gateway name', () => {
    const testString = 'testing';
    const exclusiveGatewaySelector = '#v-19';

    dragFromSourceToDest(
      nodeTypes.exclusiveGateway,
      '.paper-container',
      200, 200
    );

    cy.get(exclusiveGatewaySelector).click({force: true});
    typeIntoTextInput('[name=\'name\']', testString);
    cy.get('[name=\'name\']').should('have.value', testString);
  });

  it('Update Condition expression', () => {
    const exclusiveGatewayPosition = { x: 400, y: 300 };
    dragFromSourceToDest(
      nodeTypes.exclusiveGateway,
      '.paper-container',
      exclusiveGatewayPosition
    );

    const taskPosition = { x: 400, y: 500 };
    dragFromSourceToDest(
      nodeTypes.task,
      '.paper-container',
      taskPosition
    );

    connectNodesWithFlow('sequence-flow-button', exclusiveGatewayPosition, taskPosition);

    getElementAtPosition(exclusiveGatewayPosition)
      .then(getLinksConnectedToElement)
      .then($links => $links[0])
      .click({ force: true });

    const testString = 'foo > 7';
    typeIntoTextInput('[name=\'conditionExpression.body\']', testString);
    cy.get('[name=\'conditionExpression.body\']').should('have.value', testString);
  });
});
