'use strict';

/**
 * volume controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::volume.volume');
