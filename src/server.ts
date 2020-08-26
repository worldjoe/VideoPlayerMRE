import { log, WebHost, Permissions } from '@microsoft/mixed-reality-extension-sdk';
import { resolve as resolvePath } from 'path';
import VideoPlayer from './app';

log.enable('app');
//log.enable('network');

process.on('uncaughtException', (err) => console.log('uncaughtException', err));
process.on('unhandledRejection', (reason) => console.log('unhandledRejection', reason));

 // Start listening for connections, and serve static files
 // Note that process.env.BASE_URL/PORT variables will automatically be used if defined in the .env file
const server = new WebHost({
   baseUrl: 'http://162.255.23.205:3901',
   port: 3901,
   baseDir: resolvePath(__dirname, '../public'),
   optionalPermissions: [Permissions.UserInteraction]
});

// Handle new application sessions
server.adapter.onConnection(context => new VideoPlayer(context));

export default server;
