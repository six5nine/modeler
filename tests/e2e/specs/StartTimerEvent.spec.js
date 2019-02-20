import {
  dragFromSourceToDest,
  typeIntoTextInput,
} from '../support/utils';

import { nodeTypes } from '../support/constants';

describe('Start Timer Event', () => {
  beforeEach(() => {
    cy.loadModeler();
  });

  it('Can update name', () => {
    const testString = 'testing';
    const startTimerEventPosition = { x: 250, y: 250 };

    dragFromSourceToDest(
      nodeTypes.startTimerEvent,
      '.paper-container',
      startTimerEventPosition
    );

    cy.get('.joint-viewport').find('#v-24').click({force: true});
    typeIntoTextInput('[name=\'name\']', testString);
    cy.get('[name=\'name\']').should('have.value', testString);
  });
});
