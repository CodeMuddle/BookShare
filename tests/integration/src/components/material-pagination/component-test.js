import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('material-pagination', 'Integration | Component | material pagination', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{material-pagination}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#material-pagination}}
      template block text
    {{/material-pagination}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
