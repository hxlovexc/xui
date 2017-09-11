import { find, parent } from '../utils/query-components';

export default {
  methods: {
    broadcast (componentName, eventName, params) {
      find(this, componentName, (item) => {
        item.$emit(eventName, params);
      });
    },
    dispatch (componentName, eventName, params) {
      const component = parent(this, componentName);
      component.$emit(eventName, params);
    }
  }
};