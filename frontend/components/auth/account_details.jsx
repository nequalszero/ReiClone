import React from 'react';

const AccountDetails = (props) => {
  console.log("props: ", props);
  return(
    <section>
      <h3>{props.currentUser.username}</h3>
    </section>
  );
};

export default AccountDetails;
