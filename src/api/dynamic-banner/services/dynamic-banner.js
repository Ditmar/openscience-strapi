'use strict';

/**
 * dynamic-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dynamic-banner.dynamic-banner');
