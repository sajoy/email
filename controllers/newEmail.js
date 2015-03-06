EmailEtc.NewEmailController = Ember.Controller.extend({
  actions: {
    saveEmail: function() {
      var newEmail = this.store.createRecord('email ', {
        to: this.get('to'),
        from: this.get('from'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      newEmail.save();

      EmailEtc.Folder.store.find('folder', 2).then(function(result){
        result.get('emails').pushObject(newEmail);
        result.save();
      });


      this.set('to', "");
      this.set('from', "");
      this.set('subject', "");
      this.set('body', "");

      this.transitionTo('folder', 2);
    }
  }
});
