EmailEtc.NewEmailController = Ember.Controller.extend({
  actions: {
    saveEmail: function() {
      var newEmail = this.store.createRecord('folder', {
        to: this.get('to'),
        from: this.get('from'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      newEmail.save();
      this.set('to', "");
      this.set('from', "");
      this.set('subject', "");
      this.set('body', "");
    }
  }
});
