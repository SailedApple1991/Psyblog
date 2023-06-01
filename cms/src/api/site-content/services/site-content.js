'use strict';

/**
 * site-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-content.site-content');
