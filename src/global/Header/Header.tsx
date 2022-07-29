export default function Header({user}: any) {
  return (
    <div className="header">
      <div className="user">
        <div className="user__avatar"></div>
        <span>{user}</span>
      </div>
    </div>
  )
}
