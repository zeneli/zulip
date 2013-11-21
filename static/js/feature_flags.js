var feature_flags = (function () {

var exports = {};

// Helpers
var internal_24_hour_people= _.contains([],
    page_params.email);

var zulip_mit_emails = [];
var is_zulip_mit_user = _.contains(zulip_mit_emails, page_params.email);

var iceland = page_params.domain === 'customer8.invalid';

var customer4_realms = [
  'customer4.invalid',
  'users.customer4.invalid'
];
var is_customer4 = _.contains(customer4_realms, page_params.domain);

// Enterprise-related flags
exports.do_not_share_the_love = page_params.enterprise;

// Manually-flipped debugging flags
exports.log_send_times = false;
exports.collect_send_times = false;

// Permanent realm-specific stuff:

exports.twenty_four_hour_time = internal_24_hour_people || iceland;

exports.dropbox_integration = page_params.staging || _.contains(['dropbox.com'], page_params.domain);

exports.mandatory_topics = _.contains([
    'customer7.invalid'
    ],
    page_params.domain
);

exports.left_side_userlist = _.contains(['customer7.invalid'], page_params.domain);


// Still very beta:
exports.fade_users_when_composing = page_params.staging || is_customer4;
exports.use_socket = false;
exports.show_huddles = page_params.staging || is_customer4;

// Still burning in...
exports.mark_read_at_bottom = true;
exports.propagate_topic_edits = true;
exports.summarize_read_while_narrowed = false;

// Ready for deprecation.
exports.collapsible = false;


exports.single_message_narrowing = page_params.staging ||
  _.contains(['customer12.invalid', 'customer10.invalid'], page_params.domain);

return exports;

}());
