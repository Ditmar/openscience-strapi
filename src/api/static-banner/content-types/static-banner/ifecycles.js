'use strict';

module.exports = {
  async beforeCreate(event) {
    await validateImage(event);
  },
  async beforeUpdate(event) {
    await validateImage(event);
  },
};

async function validateImage(event) {
  const { data } = event.params;

  if (data.image) {
    const media = await strapi.db
      .query("plugin::upload.file")
      .findOne({ where: { id: data.image } });

    if (media.width !== 1200 && media.height !== 400) {
      throw new Error("Incorrect image dimensions. Required dimensions are 1200x400.");
    }
  }
}
