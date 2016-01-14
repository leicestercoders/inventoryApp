

Template.accountsUIModal.onDestroyed = function() {
  if (! Accounts.ui.view) {
    Blaze.remove(Accounts.ui.view);
  }
};

Template.accountsUIModal.helpers({
  activeTemplate: function() {
    return Accounts.ui.activeTemplate.get();
  }
});


Template.accountsUIHeader.helpers({
  title: function() {
    return I18n.get(this.title);
  }
});
