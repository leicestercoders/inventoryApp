

Template.signIn.helpers({
  services: function() {
    return getLoginServices();
  },

  isPasswordService: function () {
    return this.name === 'password';
  },

  hasOtherServices: function () {
    return getLoginServices().length > 1;
  },

  hasPasswordService: function() {
    return hasPasswordService();
  },

  singleService: function () {
    var services = getLoginServices();
    if (services.length !== 1)
      throw new Error(
        "Shouldn't be rendering this template with more than one configured service");
    return services[0];
  },

  configurationLoaded: function () {
    return Accounts.loginServicesConfigured();
  },

  showCreateAccountLink: function () {
    return !Accounts._options.forbidClientAccountCreation;
  }
});

Template.signIn.events({
  'click #signUpLink': function(e) {
    e.preventDefault();

    Accounts.ui.render('signUp');
  }
});

Template.signInPasswordService.helpers({
  fields: function () {
    return [
      {
        fieldName: 'username-or-email',
        fieldLabel: I18n.get('accounts-ui:label_username_or_email'),
        visible: function () {
          return _.contains(
            ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],
            passwordSignupFields());
        }},
      {
        fieldName: 'username',
        fieldLabel: I18n.get('accounts-ui:label_username'),
        visible: function () {
          return passwordSignupFields() === "USERNAME_ONLY";
        }},
      {
        fieldName: 'email',
        fieldLabel: I18n.get('accounts-ui:label_email'),
        inputType: 'email',
        visible: function () {
          return passwordSignupFields() === "EMAIL_ONLY";
        }},
      {
        fieldName: 'password',
        fieldLabel: I18n.get('accounts-ui:label_password'),
        inputType: 'password',
        visible: function () {
          return true;
        }}
    ];
  },

  showForgotPasswordLink: function () {
    return _.contains(
      ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "EMAIL_ONLY"],
      passwordSignupFields());
  }
});


Template.signInPasswordService.events({
  'click #forgotPasswordLink': function(e) {
    e.preventDefault();

    Accounts.ui.render('forgotPassword');
  },

  'submit #formSignIn': function(e, instance) {
    e.preventDefault();

    var username = instance.$('#login-username').val();
    var email = instance.$('#login-email').val();
    var usernameOrEmail = instance.$('#login-username-or-email').val();
    var password = instance.$('#login-password').val();

    var loginSelector;
    if (username) {
      loginSelector = { username: username.trim() };
    } else if (email) {
      loginSelector = { email: email.trim() };
    } else if (usernameOrEmail) {
      loginSelector = usernameOrEmail.trim();
    } else {
      Alerts.notifyModal('error', 'accounts-ui:error_sign_in');
      return;
    }

    Meteor.loginWithPassword(loginSelector, password, function (error) {
      if (error) {
        Alerts.notifyModal('error', 'accounts-ui:error_sign_in');
      } else {
        $('#accountsUIModal').modal('hide');
      }
    });
  }
});

// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js
var capitalize = function(str){
  str = str == null ? '' : String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
};

Template.signInOtherService.helpers({
  configured: function() {
    return !! ServiceConfiguration.configurations.findOne({
      service: this.name });
  },
  capitalizedName: function () {
    if (this.name === 'github')
    // XXX we should allow service packages to set their capitalized name
      return 'GitHub';
    else if (this.name === 'meteor-developer')
      return 'Meteor';
    else
      return capitalize(this.name);
  }
});

Template.signInOtherService.events({
  'click button': function () {
    var serviceName = this.name;

    // XXX Service providers should be able to specify their
    // `Meteor.loginWithX` method name.
    var loginWithService = Meteor["loginWith" +
      (serviceName === 'meteor-developer' ?
        'MeteorDeveloperAccount' : capitalize(serviceName))];

    var options = {}; // use default scope unless specified
    if (Accounts.ui._options.requestPermissions[serviceName])
      options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];
    if (Accounts.ui._options.requestOfflineToken[serviceName])
      options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];
    if (Accounts.ui._options.forceApprovalPrompt[serviceName])
      options.forceApprovalPrompt = Accounts.ui._options.forceApprovalPrompt[serviceName];

    loginWithService(options, function (error) {
      if (! error) {
        $('#accountsUIModal').modal('hide');
      } else if (error instanceof Accounts.LoginCancelledError) {
        // do nothing
      } else if (error instanceof ServiceConfiguration.ConfigError) {
        //Alerts.notifyModal('error', '')
      } else {
        var msg = error.reason || "error_unknown";
        Alerts.notifyModal('error', "accounts-ui:" + msg);
      }

    });
  }

});

Template.backToSignIn.events({
  'click #backToSignIn': function(e) {
    e.preventDefault();

    Accounts.ui.render('signIn');
  }
});
