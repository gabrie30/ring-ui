/* eslint-disable func-names */

import shortcutsHOC from './shortcuts-hoc';
import React from 'react';
import renderIntoDocument from 'render-into-document';
import guid from 'mout/random/guid';

import simulateCombo from 'simulate-combo';

describe('ShortcutsHOC', () => {
  describe('default', () => {
    const InputWithShortcuts = shortcutsHOC('input');

    function createShortcutsMap() {
      return {
        scope: guid(),
        options: {},
        map: {enter: sinon.spy()}
      };
    }


    let shortcuts;
    beforeEach(function () {
      shortcuts = createShortcutsMap();


      this.component = renderIntoDocument(
        <InputWithShortcuts
          shortcuts={shortcuts}
        />
      );
    });


    it('should initialize', function () {
      expect(this.component).to.be.defined;
    });


    it('should call shortcut handler', () => {
      simulateCombo('enter');

      expect(shortcuts.map.enter).to.be.called;
    });


    it('should disable shortcuts', function () {
      shortcuts = createShortcutsMap();
      shortcuts.options.disabled = true;

      this.component = renderIntoDocument(
        <InputWithShortcuts
          shortcuts={shortcuts}
        />
      );

      simulateCombo('enter');

      expect(shortcuts.map.enter).not.to.be.called;
    });
  });
});