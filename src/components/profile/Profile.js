import React from 'react'


const Profile = ({ current_profile }) => {
  return (
    <div className="profile_shadow">
      <div className="profile_container">
        <h3>{current_profile.fullname}</h3>
        <span class="why-header">PASSION, PURPOSE, WHY</span>
        <p className="why-text">{current_profile.why}</p>
      </div>
    </div>
  )
}

export default Profile;
