import { RestSerializer, Serializer } from 'ember-cli-mirage';
import { isArray } from '@ember/array';

export default RestSerializer.extend({
    serialize(response, request) {
        let json = Serializer.prototype.serialize.apply(this, arguments);

        if(isArray(response)) {
            //Add a meta property
            let pageDefined = typeof request.queryParams.page != 'undefined';
            if(pageDefined)
                json.meta = {
                    page: Number(request.queryParams.page),
                    totalPages: Math.floor(Math.random() * 3 ) + 1
                };
            else
                json.meta = { page: 0, totalPages: 0};
        }

        return json;
    }
});
