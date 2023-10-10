import { createServer, Model, RestSerializer } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

function createMockServer() {
 return createServer({
  models: {
    user: Model,
  },

  serializers: {
    application: RestSerializer.extend({
      embed: true, // Enable embedding data
      root: false, // Do not include a root element in the response
    }),
  },

  routes() {
    this.namespace = 'api';


    this.post('/auth/register', (schema: any, request: any) => {
      const attrs = JSON.parse(request.requestBody);
      attrs.id = uuidv4();
      return schema.users.create(attrs);
    });
  },
});
}

export default createMockServer;
