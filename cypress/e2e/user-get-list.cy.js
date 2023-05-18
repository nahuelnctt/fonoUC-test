it('should return a list of users', () => {
    cy.request({
      method: 'GET',
      url: 'https://cad.fonouc.com:9443/api/v2/config/users',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjZhNzgxNDczY2I3NTM2NTAyMmRlY2FmYTc3ZDUzMDY2Om5haHVlbHRlc3QiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0NDI5NTk0fQ.MhkBCMvMUKRXS70RoFmsk2_jb9CExJ6rjHrHOzFfz3g'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
      // Additional assertions specific to the user list can be added here
    });
  });
