'use strict';

/**
 * volume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::volume.volume');
