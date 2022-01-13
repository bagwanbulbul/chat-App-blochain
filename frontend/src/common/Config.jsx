
export const getSender = (loggedUser, users) => {
  
    return users[0]._id === loggedUser.data._id ? users[1].first_name : users[0].first_name;
  }
