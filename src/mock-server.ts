import { createServer, Model, RestSerializer } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

const userToken = '123456789';

function createMockServer() {
  return createServer({
    models: {
      user: Model,
    },

    serializers: {
      application: RestSerializer.extend({
        embed: true,
        root: false,
      }),
    },

    routes() {
      this.namespace = 'api';

      this.post('/register', (schema: any, request: any) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = uuidv4();
        const user = schema.users.create(attrs);
        console.log('user', user)
        const token = userToken;
        console.log('token', token)
        user.update({ token });

        return {
          user: user.attrs,
          token: token,
        };
      });

      this.post('/login', (schema: any, request: any) => {
        console.log('req', request.requestBody)
        const { email, password } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ email, password });
        console.log('user', user)
        if (user) {
          return { token: userToken };
        } else {
          return { error: 'Invalid credentials' };
        }
      });
    },
  });
}

export default createMockServer;
