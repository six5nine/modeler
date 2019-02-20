import {
  dragFromSourceToDest,
  getGraphElements,
  waitToRenderAllShapes,
  generateXML,
  connectNodesWithFlow,
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
  });
});
