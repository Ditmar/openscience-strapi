import type { Schema, Attribute } from '@strapi/strapi';

export interface ThesisComponentsTable extends Schema.Component {
  collectionName: 'components_thesis_components_tables';
  info: {
    displayName: 'Table';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Markdown: Attribute.Blocks & Attribute.Required;
    Source: Attribute.String & Attribute.Required;
    Legend: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'thesis-components.table': ThesisComponentsTable;
    }
  }
}
