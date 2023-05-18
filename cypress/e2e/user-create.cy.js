describe("User create", () => {
  it("should successfully create a user", () => {
    cy.request({
      method: "POST",
      url: "https://cad.fonouc.com:9443/api/v2/config/users",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjZhNzgxNDczY2I3NTM2NTAyMmRlY2FmYTc3ZDUzMDY2Om5haHVlbHRlc3QiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0NDI5NTk0fQ.MhkBCMvMUKRXS70RoFmsk2_jb9CExJ6rjHrHOzFfz3g",
      },
      body: {
        first_name: "john",
        last_name: "doe",
        email: "johndoe@email.com",
        level: "user",
        password: "password123",
        extension: "123",
        send_credentials: true,
        include_in_directory: true,
        role_id: "user",
        is_operator: true,
        conference: {
          enabled: true,
          pin: "123",
        },
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("should try to create a user and fail with 'Email can't be empty'", () => {
    cy.request({
      method: "POST",
      url: "https://cad.fonouc.com:9443/api/v2/config/users",
      failOnStatusCode: false,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjZhNzgxNDczY2I3NTM2NTAyMmRlY2FmYTc3ZDUzMDY2Om5haHVlbHRlc3QiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0NDI5NTk0fQ.MhkBCMvMUKRXS70RoFmsk2_jb9CExJ6rjHrHOzFfz3g",
      },
      body: {
        first_name: "john",
        last_name: "doe",
        email: "",
        level: "user",
        password: "password123",
        extension: "123",
        send_credentials: true,
        include_in_directory: true,
        role_id: "user",
        is_operator: true,
        conference: {
          enabled: true,
          pin: "123",
        },
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.eq("Email can't be empty\n");
    });
  });

  // Here, the previously registered user is deleted so that the test can run subsequently with the same credentials.

  it("should successfully delete a user", () => {
    cy.request({
      method: "DELETE",
      url: "https://cad.fonouc.com:9443/api/v2/config/users/by_username/johndoe@email.com",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjZhNzgxNDczY2I3NTM2NTAyMmRlY2FmYTc3ZDUzMDY2Om5haHVlbHRlc3QiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0NDI5NTk0fQ.MhkBCMvMUKRXS70RoFmsk2_jb9CExJ6rjHrHOzFfz3g",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
