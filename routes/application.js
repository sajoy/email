EmailEtc.ApplicationRoute = Ember.Route.extend({
  model: function() {
    this.store.push('folder', {
      id: 1,
      name: "inbox"
    });

    this.store.push('folder', {
      id: 2,
      name: "sent"
    });

    this.store.push('email', {
      id: 1,
      to: 'you@emailetc.com',
      from: 'met@emailetc.com',
      subject: "new email",
      body: 'hey, this new email client is pretty cool.',
      folder: 1
    });

    this.store.push('email', {
      id: 2,
      to: 'you@emailetc.com',
      from: 'google@gmail.com',
      subject: 'come back',
      body: 'We miss you!',
      folder: 1
    });

    this.store.push('email', {
      id: 3,
      to: 'you@emailetc.com',
      from: 'yahoo@ymail.com',
      subject: 'new offer!',
      body: 'click here for a free pony!',
      folder: 1
    });
  }
});
