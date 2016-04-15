import Ember from 'ember';
import TODOS from '../todos_data';

export default Ember.Route.extend({
    model: function() {
        return TODOS;
    }
});
