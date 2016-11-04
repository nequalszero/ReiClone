import React from 'react';

const AccountDetails = (props) => {
  console.log("props: ", props);
  return(
    <li>
      <div className={props.className}>
        <label>{props.currentUser.username}</label>
      </div>
    </li>
  );
};

export default AccountDetails;
