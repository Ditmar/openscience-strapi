'use strict';

/**
 * volume router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::volume.volume');
