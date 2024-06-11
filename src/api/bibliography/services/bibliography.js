'use strict';

/**
 * bibliography service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bibliography.bibliography');
