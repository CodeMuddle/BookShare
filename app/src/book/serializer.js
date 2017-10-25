import DS from 'ember-data';
import FirebaseSerializer from 'emberfire/serializers/firebase';

export default FirebaseSerializer.extend({
    attrs: {
        status: {embedded: 'always'}
    }
});
