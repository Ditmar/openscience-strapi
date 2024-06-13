'use strict';

/**
 * year-volume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::year-volume.year-volume');
