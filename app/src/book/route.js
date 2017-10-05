import Ember from 'ember';
const { $ } = Ember;

export default Ember.Route.extend({
    

    setupController(controller, model) {
        this._super(...arguments);
        
        Ember.run.scheduleOnce('afterRender', () => {
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            Ember.$('.modal').modal('show');
            
            //demo.js
            Ember.$('.md-select').on('click', function(){
                $(this).toggleClass('active')
            });

            Ember.$('.md-select ul li').on('click', function() {
                var v = $(this).text();
                $('.md-select ul li').not($(this)).removeClass('active');
                $(this).addClass('active');
                $('.md-select label button').text(v)
            });
            
            $('.modal-trigger').on('click', function (e) {
                console.log('@@@', e);
            })
        });
    }


});
