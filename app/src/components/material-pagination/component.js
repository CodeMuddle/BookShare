import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'ul',
    classNames: ['pagination'],
    currentPage: 0,
    totalPages: 0,

    didReceiveAttrs() {
        let totalPages = Number(this.get('totalPages'));
        let pageArray = [];

        for(let i = 1; i <= totalPages; ++i) {
            pageArray.push(i);
        }

        this.set('pageArray', pageArray);
    },

    actions: {
        onPageClick(page, modifier=0) {
            const target = page + modifier;
            if(target > 0 && target <= this.get('totalPages'))
                this.sendAction('onPageClick', target);
        }
    }
});
