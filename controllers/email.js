EmailEtc.EmailController = Ember.ObjectController.extend({  
  detailsShow: false,
  actions: {
    toggleDetails: function() {
      this.set('detailsShow', !this.detailsShow);
    }
  }
});
