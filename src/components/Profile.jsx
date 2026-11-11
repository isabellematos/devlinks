import sunglasses from '../assets/sunglasses.svg'
import './Profile.css'

function Profile({ avatarSrc, avatarAlt, username, avatarSize, isLight }) {
  return (
    <header className="profile">
      <div className="profile__avatar-slot">
        <img
          className="profile__avatar"
          src={avatarSrc}
          alt={avatarAlt}
          width={avatarSize}
          height={avatarSize}
        />
        {isLight && (
          <img
            className="profile__sunglasses"
            src={sunglasses}
            alt=""
            aria-hidden="true"
          />
        )}
      </div>
      <p className="profile__username">{username}</p>
    </header>
  )
}

export default Profile
