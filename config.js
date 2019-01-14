const dbLogin = {
  user: 'Gelun',
  password: '^^pw4MlabOK'
}

const connectionUrl = `mongodb://${dbLogin.user}:${dbLogin.password}@ds155864.mlab.com:55864/test1`;

const config = {
  connectionUrl: connectionUrl
}

module.exports = config;