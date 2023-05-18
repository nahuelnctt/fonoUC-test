describe('User Login', () => {
  it('should successfully authenticate a valid user', () => {
    cy.request({
      method: 'POST',
      url: 'https://cad.fonouc.com:9443/api/v2/config/login',   
      body: {
        username:"nahuelnct@outlook.com",
        password:"*L&N%U6BhDaZ",
        domain:"nahueltest"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('access_token');      
    });
  });

  it('should return authentication error for an invalid user', () => {
    cy.request({
      method: 'POST',
      url: 'https://cad.fonouc.com:9443/api/v2/config/login',
      failOnStatusCode: false,
      body: {
        username: 'incorrectuser',
        password: 'incorrectpassword',
        domain: 'incorrectdomain'
      }
    }).then((response) => {
      expect(response.status).to.eq(401);
    
    });
  });
});