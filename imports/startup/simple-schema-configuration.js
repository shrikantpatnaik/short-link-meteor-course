import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema'

// noinspection JSUnresolvedFunction
SimpleSchema.defineValidationErrorTransform(error => {
  return new Meteor.Error('400', error.message)
});