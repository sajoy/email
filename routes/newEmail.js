EmailEtc.newEmailRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('email');
  }
});
