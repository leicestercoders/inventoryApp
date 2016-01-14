Template.changePasswordService.events({
  'submit #formChangePassword': function(e, instance) {
    e.preventDefault();

    var password = instance.$("#change-password-password").val();
    if (! password) {
      Alerts.notifyModal('error', 'accounts-ui:error_input_required');
      return;
    }

    Accounts.changePassword(oldPassword, password, function (error) {
      if (error)
        Alerts.notifyModal('error', error.reason || "Unknown error");
      else
        Alerts.notifyModal('success', "Email sent");
    });
  }
});
