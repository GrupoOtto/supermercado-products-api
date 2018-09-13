const Type = require('../models/Type');

exports.all = async () => Type.find({});

exports.create = async (args) => Type.create(args);