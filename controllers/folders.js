EmailEtc.FoldersController = Ember.ArrayController.extend({
  actions: {
    addFolder: function() {
      var newFolder = this.store.createRecord('folder', {
        name: this.get('name'),
      });
      newFolder.save();
      this.set('name', "");
    }
  }
});
