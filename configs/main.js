/*
 *
 * Example (Main)
 *
 */

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.language = 'english';
config.identifier = '';

// Logger Configuration
config.logger = {};
config.logger.logColors = true;
config.logger.logLevel = 'log';

// Clustering Configuration
config.clustering = {};
config.clustering.enabled = true;
config.clustering.forks = 'auto';

// TLS Configuration
config.tls = {};
config.tls.ca = '';
config.tls.key = '';
config.tls.cert = '';

// Shared Configuration
////////////////////////////////////////////////////////////////////////////////

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = 3002;
ports1.enabled = true;
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = 32;
ports1.difficulty.minimum = 8;
ports1.difficulty.maximum = 512;
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);


// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = 'prc1qcd3ww7yc75tl63j3xukmphchn0eedg5ss8dzrq';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'PricecoinX';
config.primary.coin.symbol = 'PRCX';
config.primary.coin.algorithm = 'allium';

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '127.0.0.1';
daemons1.port = 2332;
daemons1.username = '';
daemons1.password = '';
config.primary.daemons.push(daemons1);

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = 'prc1qcd3ww7yc75tl63j3xukmphchn0eedg5ss8dzrq';
recipient1.percentage = 0.05;
config.primary.recipients.push(recipient1);

// Blinkhash Donation Address
const recipient2 = {};
recipient2.address = 'prc1qcd3ww7yc75tl63j3xukmphchn0eedg5ss8dzrq';
recipient2.percentage = 0.05;
config.primary.recipients.push(recipient2);

// ZMQ Configuration
config.primary.zmq = {};
config.primary.zmq.enabled = false;
config.primary.zmq.host = '127.0.0.1';
config.primary.zmq.port = 29000;

// Export Configuration
module.exports = config;

