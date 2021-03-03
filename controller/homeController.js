const homeController = {}

homeController.index = async (req, res) => {
  res.status(200).json({
    links: {
      self: { href: '/api', method: 'GET', desc: 'the current url, the entry point' },
      register: { href: '/api/users/register', method: 'POST', desc: 'url to create a new user', body: { username: 'yourUsername', password: 'yourPassword' } },
      login: { href: '/api/users/login', method: 'POST', desc: 'url to log in with a user', headers: { key: 'auth-token', xaccesstoken: 'yourToken' }, body: { username: 'yourUsername', password: 'yourPassword' } },
      fish: { href: '/api/fish', method: 'GET', desc: 'Fish starting point, here you will get all links within fish' }
    }
  })
}
module.exports = homeController
